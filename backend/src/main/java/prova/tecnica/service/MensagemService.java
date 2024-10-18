package prova.tecnica.service;

import org.springframework.stereotype.Service;
import prova.tecnica.base.BaseService;
import prova.tecnica.domain.Cliente;
import prova.tecnica.domain.Mensagem;
import prova.tecnica.dto.EnvioMensagemDTO;
import prova.tecnica.repository.MensagemRepository;

@Service
public class MensagemService extends BaseService<Mensagem, MensagemRepository> {

    private static final Double CUSTO_MSM = 0.25;

    private final MensagemRepository mensagemRepository;
    private final ClienteService clienteService;

    public MensagemService(MensagemRepository mensagemRepository,
                           ClienteService clienteService) {
        this.mensagemRepository = mensagemRepository;
        this.clienteService = clienteService;
    }


    public Mensagem enviar(EnvioMensagemDTO envioMensagemDTO) {
        Cliente cliente = clienteService.getById(envioMensagemDTO.getClienteId());

        if(isPrePago(cliente)){
            if (!saldoValido(cliente)) {
                throw new RuntimeException("Saldo insuficiente para enviar a mensagem.");
            }
            descontarSaldo(cliente);
        }

        if(isPosPago(cliente))  {
            if (!possuiLimiteDeConsumo(cliente)) {
                throw new RuntimeException("Limite de consumo excedido.");
            }
            aumentarConsumo(cliente);
        }
        Mensagem novaMensagem = criaMensagem(cliente.getTelefone(), Boolean.FALSE, envioMensagemDTO.getTexto());
        //caso o sistema estivesse completo, seria aqui que eu chamaria o metodo de enviar a msg e outros processamentos.
        //de preferencia eu jogaria o envio para uma fila.

        return novaMensagem;
    }

    private static void aumentarConsumo(Cliente cliente) {
        Double novoConsumo = cliente.getConsumo() + CUSTO_MSM;
        cliente.setConsumo(novoConsumo);
    }

    private static boolean isPrePago(Cliente cliente) {
        return cliente.getPlano().getId().equals(1L);
    }

    private static boolean isPosPago(Cliente cliente) {
        return cliente.getPlano().getId().equals(2L);
    }

    private void descontarSaldo(Cliente cliente) {
        Double novoSaldo = cliente.getSaldo() - CUSTO_MSM;
        cliente.setSaldo(novoSaldo);
        clienteService.updateEntity(cliente);
    }

    private static boolean saldoValido(Cliente cliente) {
        return cliente.getSaldo() > CUSTO_MSM;
    }

    private static boolean possuiLimiteDeConsumo(Cliente cliente) {
        return cliente.getLimiteConsumo() >  cliente.getConsumo();
    }

    public Mensagem criaMensagem(String telefone, Boolean isWhatapp, String texto) {
        Mensagem mensagem = new Mensagem(telefone, isWhatapp, texto);
        return mensagemRepository.save(mensagem);
    }

}


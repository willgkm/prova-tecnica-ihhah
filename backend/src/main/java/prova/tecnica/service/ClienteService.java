package prova.tecnica.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import prova.tecnica.dto.AdicionarSaldoDTO;
import prova.tecnica.base.BaseService;
import prova.tecnica.domain.Cliente;
import prova.tecnica.dto.AlterarLimiteDTO;
import prova.tecnica.repository.ClienteRepository;

import java.util.Objects;

@Service
public class ClienteService extends BaseService<Cliente, ClienteRepository> {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente adicionarSaldo(AdicionarSaldoDTO adicionarSaldoDTO) {
        Cliente cliente = clienteRepository.findById(adicionarSaldoDTO.getClienteId()).get();
        if(Objects.isNull(cliente.saldo)) {
            cliente.setSaldo(0.0);
        }
        Double novoSaldo = cliente.getSaldo()  + adicionarSaldoDTO.getValor();

        cliente.setSaldo(novoSaldo);
        return clienteRepository.save(cliente);
    }

    public Cliente alterarLimite(AlterarLimiteDTO alterarLimiteDTO){
        Cliente cliente = clienteRepository.findById(alterarLimiteDTO.getClienteId()).get();
        if(Objects.isNull(cliente.getLimiteConsumo())) {
            cliente.setLimiteConsumo(0.0);
        }
        cliente.setLimiteConsumo(alterarLimiteDTO.getNovoLimite());
        return clienteRepository.save(cliente);
    }

}

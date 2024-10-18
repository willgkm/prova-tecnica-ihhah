package prova.tecnica.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import prova.tecnica.domain.Cliente;
import prova.tecnica.domain.Mensagem;
import prova.tecnica.domain.Plano;
import prova.tecnica.dto.EnvioMensagemDTO;
import prova.tecnica.repository.MensagemRepository;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class MensagemServiceTest {

    @InjectMocks
    private MensagemService mensagemService;

    @Mock
    private ClienteService clienteService;

    @Mock
    private MensagemRepository mensagemRepository;

    private Cliente clientePosPago;
    private Cliente clientePrePago;
    private EnvioMensagemDTO envioMensagemDTO;
    private Plano planoPrePago;
    private Plano planoPosPago;
    private Mensagem mensagemMock;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

        planoPrePago = new Plano();
        planoPrePago.setId(1L);
        planoPrePago.setNome("Pre-pago");

        planoPosPago = new Plano();
        planoPosPago.setId(2L);
        planoPosPago.setNome("Pós-pago");

        clientePrePago = new Cliente();
        clientePrePago.setNome("joao prepago");
        clientePrePago.setTelefone("44 444444-4444");
        clientePrePago.setPlano(planoPrePago);
        clientePrePago.setSaldo(0.50);

        clientePosPago = new Cliente();
        clientePosPago.setNome("carlos pospago");
        clientePosPago.setTelefone("55 55555-5555");
        clientePosPago.setPlano(planoPosPago);
        clientePosPago.setConsumo(0.50);
        clientePosPago.setSaldo(0.0);
        clientePosPago.setLimiteConsumo(1.0);


        envioMensagemDTO = new EnvioMensagemDTO();
        envioMensagemDTO.setClienteId(1L);
        envioMensagemDTO.setTexto("Mensagem de teste");

        mensagemMock =  new Mensagem(clientePrePago.telefone, Boolean.FALSE, envioMensagemDTO.getTexto());
    }

    @Test
    void testEnviarMensagemPrePagoComSaldoSuficiente() {

        when(clienteService.getById(1L)).thenReturn(clientePrePago);
        when(mensagemService.criaMensagem(clientePrePago.telefone, Boolean.FALSE, envioMensagemDTO.getTexto()))
                .thenReturn(mensagemMock);

        Mensagem mensagem = mensagemService.enviar(envioMensagemDTO);

        assertEquals("Mensagem de teste", mensagem.getTexto());
        assertEquals(0.25, clientePrePago.getSaldo());
    }

    @Test
    void testEnviarMensagemPrePagoSemSaldoInsuficiente() {
        clientePrePago.setSaldo(0.20);

        when(clienteService.getById(1L)).thenReturn(clientePrePago);

        Exception exception = assertThrows(RuntimeException.class, () -> {
            mensagemService.enviar(envioMensagemDTO);
        });

        assertEquals("Saldo insuficiente para enviar a mensagem.", exception.getMessage());
        assertEquals(0.20, clientePrePago.getSaldo());
    }

    @Test
    void testEnviarMensagemPosPagoComLimiteDeConsumo() {

        when(clienteService.getById(1L)).thenReturn(clientePosPago);
        when(mensagemService.criaMensagem(clientePosPago.telefone, Boolean.FALSE, envioMensagemDTO.getTexto()))
                .thenReturn(mensagemMock);

        Mensagem mensagem = mensagemService.enviar(envioMensagemDTO);
        assertEquals(0.75, clientePosPago.getConsumo());
    }

    @Test
    void testEnviarMensagemPosPagoSemLimiteDeConsumo() {
        clientePosPago.setConsumo(1.0);
        when(clienteService.getById(1L)).thenReturn(clientePosPago);
        when(mensagemService.criaMensagem(clientePosPago.telefone, Boolean.FALSE, envioMensagemDTO.getTexto()))
                .thenReturn(mensagemMock);

        Exception exception = assertThrows(RuntimeException.class, () -> {
            mensagemService.enviar(envioMensagemDTO);
        });

        assertEquals("Limite de consumo excedido.", exception.getMessage());
        assertEquals(1.0, clientePosPago.getConsumo());
    }




}

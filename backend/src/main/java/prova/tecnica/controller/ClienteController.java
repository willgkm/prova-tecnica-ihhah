package prova.tecnica.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import prova.tecnica.dto.AdicionarSaldoDTO;
import prova.tecnica.base.BaseController;
import prova.tecnica.domain.Cliente;
import prova.tecnica.dto.AlterarLimiteDTO;
import prova.tecnica.repository.ClienteRepository;
import prova.tecnica.service.ClienteService;

@Controller
@RestController
@RequestMapping("/api/cliente")
public class ClienteController extends BaseController<Cliente, ClienteRepository, ClienteService> {

    @Autowired
    private ClienteService clienteService;

    @PostMapping("/adicionar-saldo")
    public ResponseEntity<Cliente> adicionarSaldo(@RequestBody AdicionarSaldoDTO adicionarSaldoDTO) {
        return ResponseEntity.ok(clienteService.adicionarSaldo(adicionarSaldoDTO));
    }

    @PostMapping("/alterar-limite")
    public ResponseEntity<Cliente> alterarLimite(@RequestBody AlterarLimiteDTO alterarLimiteDTO) {
        return ResponseEntity.ok(clienteService.alterarLimite(alterarLimiteDTO));
    }

}

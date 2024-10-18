package prova.tecnica.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import prova.tecnica.base.BaseController;
import prova.tecnica.domain.Cliente;
import prova.tecnica.domain.Mensagem;
import prova.tecnica.dto.AdicionarSaldoDTO;
import prova.tecnica.dto.EnvioMensagemDTO;
import prova.tecnica.repository.MensagemRepository;
import prova.tecnica.service.MensagemService;

@Controller
@RestController
@RequestMapping("/api/mensagem")
public class MensagemController extends BaseController<Mensagem, MensagemRepository, MensagemService> {

    @Autowired
    private MensagemService mensagemService;

    @PostMapping("/enviar")
    public ResponseEntity<Mensagem> adicionarSaldo(@RequestBody EnvioMensagemDTO envioMensagemDTO) {
        return ResponseEntity.ok(mensagemService.enviar(envioMensagemDTO) );
    }


}

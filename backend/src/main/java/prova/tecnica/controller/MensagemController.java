package prova.tecnica.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import prova.tecnica.base.BaseController;
import prova.tecnica.domain.Mensagem;
import prova.tecnica.repository.MensagemRepository;
import prova.tecnica.service.MensagemService;

@Controller
@RestController
@RequestMapping("/api/mensagem")
public class MensagemController extends BaseController<Mensagem, MensagemRepository, MensagemService> {
}

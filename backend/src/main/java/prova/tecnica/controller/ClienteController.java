package prova.tecnica.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import prova.tecnica.base.BaseController;
import prova.tecnica.domain.Cliente;
import prova.tecnica.repository.ClienteRepository;
import prova.tecnica.service.ClienteService;

@Controller
@RestController
@RequestMapping("/api/cliente")
public class ClienteController extends BaseController<Cliente, ClienteRepository, ClienteService> {

}

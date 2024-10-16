package prova.tecnica.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import prova.tecnica.base.BaseController;
import prova.tecnica.domain.Plano;
import prova.tecnica.repository.PlanoRepository;
import prova.tecnica.service.PlanoService;


@Controller
@RestController
@RequestMapping("/api/plano")
public class PlanoController extends BaseController<Plano, PlanoRepository, PlanoService> {
}

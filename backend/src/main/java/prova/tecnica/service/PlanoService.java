package prova.tecnica.service;

import org.springframework.stereotype.Service;
import prova.tecnica.base.BaseService;
import prova.tecnica.domain.Plano;
import prova.tecnica.repository.PlanoRepository;

@Service
public class PlanoService extends BaseService<Plano, PlanoRepository> {
}

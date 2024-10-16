package prova.tecnica.service;

import org.springframework.stereotype.Service;
import prova.tecnica.base.BaseService;
import prova.tecnica.domain.Cliente;
import prova.tecnica.repository.ClienteRepository;

@Service
public class ClienteService extends BaseService<Cliente, ClienteRepository> {
}

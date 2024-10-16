package prova.tecnica.service;

import org.springframework.stereotype.Service;
import prova.tecnica.base.BaseService;
import prova.tecnica.domain.Mensagem;
import prova.tecnica.repository.MensagemRepository;

@Service
public class MensagemService extends BaseService<Mensagem, MensagemRepository> {
}

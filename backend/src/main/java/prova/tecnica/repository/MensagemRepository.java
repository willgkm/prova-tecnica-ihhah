package prova.tecnica.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import prova.tecnica.domain.Mensagem;

public interface MensagemRepository extends JpaRepository<Mensagem, Long> {
}

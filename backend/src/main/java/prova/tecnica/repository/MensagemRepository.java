package prova.tecnica.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import prova.tecnica.domain.Mensagem;

@Repository
public interface MensagemRepository extends JpaRepository<Mensagem, Long> {
}

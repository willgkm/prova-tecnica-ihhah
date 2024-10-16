package prova.tecnica.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import prova.tecnica.domain.Plano;

public interface PlanoRepository extends JpaRepository<Plano,Long> {
}

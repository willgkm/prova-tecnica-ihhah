package prova.tecnica.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import prova.tecnica.domain.Plano;

@Repository
public interface PlanoRepository extends JpaRepository<Plano,Long> {
}

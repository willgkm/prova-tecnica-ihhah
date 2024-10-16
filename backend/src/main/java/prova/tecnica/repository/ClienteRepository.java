package prova.tecnica.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import prova.tecnica.domain.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}

package prova.tecnica.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import prova.tecnica.domain.Cliente;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Long>, JpaRepository<Cliente, Long> {
}

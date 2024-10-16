package prova.tecnica.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Plano {
    @Id
    private Long id;
    private String nome;
    private Double custo;
    private Double limiteConsumo;
}

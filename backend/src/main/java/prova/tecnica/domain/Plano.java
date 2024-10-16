package prova.tecnica.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import prova.tecnica.base.BaseEntity;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Plano extends BaseEntity {

    private Long id;
    @Column(name = "nome")
    private String nome;
    @Column(name = "custo")
    private Double custo;
    @Column(name = "limite_consumo")
    private Double limiteConsumo;
}

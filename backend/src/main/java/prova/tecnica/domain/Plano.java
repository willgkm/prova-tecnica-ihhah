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

    @Column(name = "nome")
    private String nome;
}

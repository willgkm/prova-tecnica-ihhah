package prova.tecnica.domain;

import com.fasterxml.jackson.databind.ser.Serializers;
import jakarta.persistence.*;
import lombok.*;
import prova.tecnica.base.BaseEntity;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Cliente extends BaseEntity {

    @Column(name = "nome")
    public String nome;
    //TODO: criar um email validator;
    @Column(name = "email")
    public String email;
    @Column(name = "telefone")
    public String telefone;
    @Column(name = "cpf")
    public String cpf;
    @Column(name = "cnpj")
    public String cnpj;
    @Column(name = "nome_da_empresa")
    public String nomeDaEmpresa;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "plano_id")
    public Plano idPlano;
    @Column(name = "saldo")
    public Double saldo;
    @Column(name = "limite")
    public Double limite;



}

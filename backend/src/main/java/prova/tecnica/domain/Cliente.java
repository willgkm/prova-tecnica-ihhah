package prova.tecnica.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cliente {

    @Id
    @Column(name = "id")
    public Long id;
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

package prova.tecnica.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import prova.tecnica.base.BaseEntity;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Cliente extends BaseEntity {

    @NotBlank(message = "O nome não pode ser vazio")
    @Size(max = 100, message = "O nome deve ter no máximo 100 caracteres")
    @Column(name = "nome")
    public String nome;

    @NotBlank(message = "O email não pode ser vazio")
    @Email
    @Column(name = "email")
    public String email;

    @NotBlank(message = "O Telefone não pode ser vazio")
    @Size(max = 15, message = "O telefone deve ter no máximo 15 caracteres")
    @Column(name = "telefone")
    public String telefone;

    @Size(max = 14, message = "O CPF deve ter no máximo 14 caracteres")
    @Column(name = "cpf")
    public String cpf;

    @Size(max = 18, message = "O CNPJ deve ter no máximo 14 caracteres")
    @Column(name = "cnpj")
    public String cnpj;

    @Size(max = 100, message = "O nome da empresa deve ter no máximo 100 caracteres")
    @Column(name = "nome_empresa")
    public String nomeEmpresa;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "plano_id")
    public Plano plano;

    @NotNull(message = "O saldo não pode ser nulo")
    @Column(name = "saldo")
    public Double saldo;


}

package prova.tecnica.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cliente {

    @Id
    public Long id;
    public String nome;
    //TODO: criar um email validator;
    public String email;
    public String telefone;
    public String cpf;
    public String cnpj;
    public String nomeDaEmpresa;
    public String tipoPlano;
    public Double saldo;
    public Double limite;



}

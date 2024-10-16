package prova.tecnica.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Mensagem {

    @Id
    public Long id;
    public String numeroTelefone;
    public Boolean isWhatsApp;
    public String texto;
    public String client;

}

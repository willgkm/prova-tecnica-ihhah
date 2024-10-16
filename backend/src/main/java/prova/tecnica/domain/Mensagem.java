package prova.tecnica.domain;

import jakarta.persistence.Column;
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
    @Column(name = "id")
    public Long id;
    @Column(name = "numero_telefone")
    public String numeroTelefone;
    @Column(name = "is_whatsapp")
    public Boolean isWhatsApp;
    @Column(name = "texto")
    public String texto;
    @Column(name = "client_type")
    public String clientType;

}

package prova.tecnica.domain;

import com.fasterxml.jackson.databind.ser.Serializers;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import prova.tecnica.base.BaseEntity;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Mensagem extends BaseEntity {

    @Column(name = "numero_telefone")
    public String numeroTelefone;
    @Column(name = "is_whatsapp")
    public Boolean isWhatsApp;
    @Column(name = "texto")
    public String texto;
    @Column(name = "client_type")
    public String clientType;

}

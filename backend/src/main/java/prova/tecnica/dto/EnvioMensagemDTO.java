package prova.tecnica.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EnvioMensagemDTO {

    @NotEmpty
    private Long clienteId;

    @NotEmpty
    private String texto;
}

package prova.tecnica.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class AlterarLimiteDTO {

    @NotEmpty
    private Long clienteId;

    @NotEmpty
    private Double novoLimite;
}

package prova.tecnica.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class AdicionarSaldoDTO {

    @NotEmpty
    private Long clienteId;

    @NotEmpty
    private Double valor;
}

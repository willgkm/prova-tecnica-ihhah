import { ClienteType } from "../models/ClienteType";
import api from "./api";
import BaseService from "./baseService";

class ClienteService extends BaseService<ClienteType> {
  constructor() {
    super("/cliente");
  }

  async adicionarSaldo(clienteId: number, valor: number) {
    try {
      const response = await api.post(`${this.baseUrl}/adicionar-saldo`, {
        clienteId,
        valor
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao adicionar saldo:", error);
      throw error;
    }
  }


}

export default new ClienteService();

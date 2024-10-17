import api from "./api";

class BaseService<T> {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async getAll(): Promise<T[]> {
    try {
      const response = await api.get(`${this.baseUrl}/list`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar ${this.baseUrl}:`, error);
      throw error;
    }
  }

  public async getById(id: number): Promise<T> {
    try {
      const response = await api.get(`${this.baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar ${this.baseUrl} com ID ${id}:`, error);
      throw error;
    }
  }

  public async save(entity: T): Promise<void> {
    try {
      await api.post(this.baseUrl, entity);
    } catch (error) {
      console.error(`Erro ao salvar ${this.baseUrl}:`, error);
      throw error;
    }
  }

  public async update(id: number, entity: T): Promise<void> {
    try {
      await api.put(`${this.baseUrl}/${id}`, entity);
    } catch (error) {
      console.error(`Erro ao atualizar ${this.baseUrl} com ID ${id}:`, error);
      throw error;
    }
  }

  public async delete(id: number): Promise<void> {
    try {
      await api.delete(`${this.baseUrl}/${id}`);
    } catch (error) {
      console.error(`Erro ao deletar ${this.baseUrl} com ID ${id}:`, error);
      throw error;
    }
  }
}

export default BaseService;

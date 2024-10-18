import { PlanoType } from "./PlanoType";

export interface ClienteType {
    id?: number;
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    cnpj: string;
    nomeEmpresa: string;
    plano?: PlanoType;
    saldo: number;
    consumo: number; 
    limiteConsumo: number; 
  }
  
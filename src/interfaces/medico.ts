import { Especialidade } from "../types/especialidade.js";

export interface Medico {
  id: number;
  nome: string;
  crm: string;
  especialidade: Especialidade;
  ativo: boolean;
}
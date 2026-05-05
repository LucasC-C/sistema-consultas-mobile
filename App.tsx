import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// 1. Importações da nossa modelagem
import { Especialidade } from "./src/types/especialidade";
import { Paciente } from "./src/types/paciente";
import { Medico } from "./src/interfaces/medico";
import { Consulta } from "./src/interfaces/consulta";

// 2. Dados "Mockados" (Simulando o Banco de Dados)
const cardiologia: Especialidade = {
  id: 1,
  nome: "Cardiologia",
  descricao: "Cuidados com o coração",
};

const medico1: Medico = {
  id: 1,
  nome: "Dr. Roberto Silva",
  crm: "CRM12345",
  especialidade: cardiologia,
  ativo: true,
};

const paciente1: Paciente = {
  id: 1,
  nome: "Carlos Andrade",
  cpf: "123.456.789-00",
  email: "carlos@email.com",
  telefone: "(11) 98765-4321",
};

export default function App() {
  // 3. Estado Tipado (Passo 13)
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    medico: medico1,
    paciente: paciente1,
    data: new Date(2026, 2, 10), // Representa 10 de Março de 2026
    valor: 350,
    status: "agendada",
    observacoes: "Consulta de rotina",
  });

  // 4. Função para Confirmar Consulta (Passo 14)
  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
  }

  // 5. Função para Formatar Valor Monetário (Passo 15)
  function formatarValor(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  // 6. Função para Formatar Data Brasileira (Passo 16)
  function formatarData(data: Date): string {
    return data.toLocaleDateString("pt-BR");
  }

  // 7. Interface Visual
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de Consultas</Text>

      <View style={styles.card}>
        <Text style={styles.textoDestaque}>
          Paciente: {consulta.paciente.nome}
        </Text>
        <Text>CPF: {consulta.paciente.cpf}</Text>

        <View style={styles.divisor} />

        <Text style={styles.textoDestaque}>
          Médico: {consulta.medico.nome}
        </Text>
        <Text>Especialidade: {consulta.medico.especialidade.nome}</Text>

        <View style={styles.divisor} />

        {/* Utilizando as funções de formatação */}
        <Text>Data: {formatarData(consulta.data)}</Text>
        <Text>Valor: {formatarValor(consulta.valor)}</Text>
        
        {/* Renderização condicional para as observações */}
        {consulta.observacoes && (
          <Text>Obs: {consulta.observacoes}</Text>
        )}
        
        <Text>Status: {consulta.status.toUpperCase()}</Text>

        <View style={styles.botaoContainer}>
          {/* Botão desaparece após a confirmação */}
          {consulta.status === "agendada" && (
            <Button
              title="Confirmar Consulta"
              color="#28a745"
              onPress={confirmarConsulta}
            />
          )}
        </View>
      </View>
    </View>
  );
}

// 8. Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textoDestaque: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0056b3",
    marginTop: 5,
  },
  divisor: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
  botaoContainer: {
    marginTop: 15,
  },
});
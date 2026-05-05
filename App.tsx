import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// 1. Importações da nossa modelagem
import { Especialidade } from "./src/types/especialidade";
import { Paciente } from "./src/types/paciente";
import { Medico } from "./src/interfaces/medico";
import { Consulta } from "./src/interfaces/consulta";

// 2. Dados "Mockados" (Simulando o que viria do Backend)
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
  // 3. O Estado agora utiliza a Interface Consulta completa e aninha os objetos
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    medico: medico1, // Usando o objeto Medico criado acima
    paciente: paciente1, // Usando o objeto Paciente criado acima
    data: new Date("2026-02-28T14:30:00"), // Agora é um Date real
    valor: 250.0,
    status: "agendada",
  });

  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
  }

  // 4. A Interface Visual atualizada
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

        {/* Formatando a data real para algo legível */}
        <Text>
          Data: {consulta.data.toLocaleDateString("pt-BR")} às{" "}
          {consulta.data.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
        <Text>Valor: R$ {consulta.valor.toFixed(2)}</Text>
        <Text>Status: {consulta.status.toUpperCase()}</Text>

        <View style={styles.botaoContainer}>
          {consulta.status === "agendada" && (
            <Button
              title="Confirmar Consulta"
              color="#28a745"
              onPress={confirmarConsulta}
            />
          )}
        </Text>
      </View>
    </View>
  );
}

// 5. Estilos atualizados para comportar as novas informações
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4", // Fundo levemente cinza
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
    // Efeito de sombra (Sombra no iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra no Android
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
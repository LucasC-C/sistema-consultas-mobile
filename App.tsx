import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// Importações dos Types Globais
import { Especialidade } from "./src/types/especialidade";
import { Paciente } from "./src/types/paciente";
import { Medico } from "./src/interfaces/medico";
import { Consulta } from "./src/interfaces/consulta";

// Importação Limpa do nosso novo Componente
import ConsultaCard from "./src/components/ConsultaCard";

// Dados Mockados
const cardiologia: Especialidade = { id: 1, nome: "Cardiologia" };
const medico1: Medico = { id: 1, nome: "Dr. Roberto Silva", crm: "CRM12345", especialidade: cardiologia, ativo: true };
const paciente1: Paciente = { id: 1, nome: "Carlos Andrade", cpf: "123.456.789-00", email: "carlos@email.com" };

export default function App() {
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    medico: medico1,
    paciente: paciente1,
    data: new Date(2026, 2, 10),
    valor: 350,
    status: "agendada",
    observacoes: "Consulta de rotina",
  });

  function confirmarConsulta() {
    setConsulta({ ...consulta, status: "confirmada" });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de Consultas</Text>

      {/* OLHA QUE LIMPEZA! APENAS 1 LINHA DE CÓDIGO */}
      <View style={styles.cardContainer}>
        <ConsultaCard 
          consulta={consulta} 
          onConfirmar={confirmarConsulta} 
        />
      </View>

    </View>
  );
}

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
  cardContainer: {
    width: "85%", // O controle da largura fica na tela principal
  }
});
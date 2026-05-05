/**
 * ConsultaCard - Componente Reutilizável
 * 
 * Responsabilidade: Exibir os dados de UMA consulta
 */

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Consulta } from "../interfaces/consulta"; // import do type GLOBAL

// Type LOCAL (usado apenas aqui)
export type ConsultaCardProps = {
  consulta: Consulta;
  onConfirmar?: () => void;
  onCancelar?: () => void;
};

// Utilizando export default conforme o Passo 2
export default function ConsultaCard({
  consulta,
  onConfirmar,
  onCancelar,
}: ConsultaCardProps) {

  // Auxiliar LOCAL - formata valor para R$ 150,00
  function formatarValor(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  // Auxiliar LOCAL - formata data para 25/03/2026
  function formatarData(data: Date): string {
    return data.toLocaleDateString("pt-BR");
  }

  return (
    <View style={styles.card}>
      <Text style={styles.textoDestaque}>
        Paciente: {consulta.paciente.nome}
      </Text>
      <Text>CPF: {consulta.paciente.cpf}</Text>

      <View style={styles.divisor} />

      <Text style={styles.textoDestaque}>Médico: {consulta.medico.nome}</Text>
      <Text>Especialidade: {consulta.medico.especialidade.nome}</Text>

      <View style={styles.divisor} />

      <Text>Data: {formatarData(consulta.data)}</Text>
      <Text>Valor: {formatarValor(consulta.valor)}</Text>

      {consulta.observacoes && <Text>Obs: {consulta.observacoes}</Text>}

      <Text>Status: {consulta.status.toUpperCase()}</Text>

      <View style={styles.botaoContainer}>
        {/* Usando o onConfirmar opcional que passamos na Prop */}
        {onConfirmar && consulta.status === "agendada" && (
          <Button
            title="Confirmar Consulta"
            color="#28a745"
            onPress={onConfirmar}
          />
        )}
      </View>
    </View>
  );
}

// Estilos LOCAIS (encapsulados no componente)
const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16, // Atualizado para 16 conforme o Passo 2
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
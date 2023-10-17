import React from "react";

const vagas = [
  {
    placa: "ABC-1234",
    nomeProprietario: "João da Silva",
    numeroApartamento: "101",
    blocoApartamento: "A",
    modeloVeiculo: "Sedan",
    corVeiculo: "Azul",
    numeroVaga: "V01"
  },
  // Adicione mais vagas aqui
];

function ListarVagas() {
  return (
    <div>
      <h2>Listar Vagas</h2>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Proprietário</th>
            <th>Apartamento</th>
            <th>Bloco</th>
            <th>Modelo</th>
            <th>Cor</th>
            <th>Número da Vaga</th>
          </tr>
        </thead>
        <tbody>
          {vagas.map((vaga, index) => (
            <tr key={index}>
              <td>{vaga.placa}</td>
              <td>{vaga.nomeProprietario}</td>
              <td>{vaga.numeroApartamento}</td>
              <td>{vaga.blocoApartamento}</td>
              <td>{vaga.modeloVeiculo}</td>
              <td>{vaga.corVeiculo}</td>
              <td>{vaga.numeroVaga}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarVagas;

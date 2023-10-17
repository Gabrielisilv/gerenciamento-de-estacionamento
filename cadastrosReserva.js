import React from 'react';

function cadastroReserva () {
    return (
        <div>
            <h1>página Cadastros de reservas</h1>
        </div>
    );
}

import React, { useState } from "react";

function CadastroReserva() {
  const [reserva, setReserva] = useState({
    placa: "",
    nomeProprietario: "",
    numeroApartamento: "",
    blocoApartamento: "",
    modeloVeiculo: "",
    corVeiculo: "",
    numeroVaga: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReserva({ ...reserva, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reserva cadastrada:", reserva);
    alert("Cadastro realizado com sucesso!");
    setReserva({
      placa: "",
      nomeProprietario: "",
      numeroApartamento: "",
      blocoApartamento: "",
      modeloVeiculo: "",
      corVeiculo: "",
      numeroVaga: ""
    });
  };

  return (
    <div>
      <h2>Cadastro de Reserva</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Placa do Veículo:</label>
          <input
            type="text"
            name="placa"
            value={reserva.placa}
            onChange={handleInputChange}
          />
        </div>
        {/* Outros campos de formulário aqui */}
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default cadastroReserva;

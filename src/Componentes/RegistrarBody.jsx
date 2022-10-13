import React, { Component } from "react";

export default class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { nombre, apellido, email, password } = this.state;
    fetch("http://localhost:3000/Register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        nombre,
        email,
        apellido,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Registrarse</h3>

        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            onChange={(e) => this.setState({ nombre: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Apellido</label>
          <input
            type="text"
            className="form-control"
            placeholder="Apellido"
            onChange={(e) => this.setState({ apellido: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Direccion de Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingrese su Email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingrese su Contraseña"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </div>
        <p className="forgot-password text-right">
         <a href="/register">Registrado?</a>
        </p>
      </form>
    );
  }
}
import React, { Component } from "react";
import md5 from "md5";

 class LoginBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
     fetch("http://localhost:5500/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login exitoso");
        }
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Login</h3>

        <div className="mb-3">
          <label>Usuario</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese su Usuario"
            onChange={(event) => this.setState({ username: event.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingrese su contraseña"
            onChange={(event) => this.setState({ password: md5(event.target.value) })}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
          
        </div>
        <p className="forgot-password text-right">
          <a href="/Register">Registrarse</a>
        </p>
      </form>
    );
  }
}

export default LoginBody;
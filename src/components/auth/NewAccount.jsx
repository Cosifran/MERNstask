//Import fuctions react
import React from "react";
import {useState, useContext} from "react";
//Import context
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
const NewAccount = () => {
  const authContext = useContext(AuthContext);
  const {registerUserFn} = authContext;
  const alertContext = useContext(AlertContext);
  const {alert, getAlertFn} = alertContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const {name, email, password, confirm} = user;

  const onChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //validar que no hayan campos vacios
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirm.trim() === ""
    ) {
      getAlertFn("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    //el password debe ser de almenos 6 caracteres
    if (password.length < 6) {
      getAlertFn("La contraseña debe ser mayor a 6 caracteres", "alerta-error");
      return;
    }

    //los password son iguales
    if (password !== confirm) {
      getAlertFn("Las contraseñas no coinciden", "alerta-error");
      return;
    }

    registerUserFn({
      name,
      email,
      password,
    });
  };
  return (
    <div className="form-usuario">
      {alert && <div className={`alerta ${alert.category}`}>{alert.msg}</div>}
      <div className="contenedor-form sombra-dark">
        <h1>Obtener cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Usuario</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu email"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirm">Confirmar password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Confirma tu password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAccount;

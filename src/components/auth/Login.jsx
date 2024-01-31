//Import fuctions react
import React from "react";
import {useState, useContext, useEffect} from "react";
//Import react router
import {Link} from "react-router-dom";
//Import fuctions react-router
import {useNavigate} from "react-router-dom";
//Import context
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const {alert, getAlertFn} = alertContext;
  const {authenticated, menssage, loginUserFn} = authContext;

  const {email, password} = user;
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate("/projects");
    }

    if (menssage) {
      getAlertFn(menssage.msg, menssage.category);
    }
  }, [menssage, authenticated, props.history]);

  const onChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //validar que no hayan campos vacios
    if (email.trim() === "" || password.trim() === "") {
      getAlertFn("Todos los campos son obligatorios", "alerta-error");
      return;
    }
    //envia los datos al registro
    loginUserFn({
      email,
      password,
    });
  };
  return (
    <div className="form-usuario">
      {alert && <div className={`alerta ${alert.category}`}>{alert.msg}</div>}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar sesión</h1>

        <form onSubmit={onSubmit}>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
          <div>
            <Link to={"/new-account"} className="enlace-cuenta text-center">
              Obtener cuenta
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

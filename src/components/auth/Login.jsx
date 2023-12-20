//Import fuctions react
import React from "react" 
import { useState } from "react"
//Import react router
import { Link } from "react-router-dom"
const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  
  const onChange = e => {
    setUser({...user, 
    [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
  }
  return (
    <div className="form-usuario">
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
            <Link to={'/new-account'} className="enlace-cuenta text-center">
              Obtener cuenta
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

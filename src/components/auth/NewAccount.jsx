//Import fuctions react
import React from "react"
import {useState} from "react"
//Import react router
import {Link} from "react-router-dom"
const NewAccount = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  })

  const onChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="form-usuario">
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
  )
}

export default NewAccount

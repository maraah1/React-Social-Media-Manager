import React, {Component} from 'react';
import { Link } from 'react-router-dom'

const style = {
  marginTop: '250px',
  marginRight: '550px',
  marginLeft: '550px',
  backgroundColor:'lightBlue',
  paddingTop: '100px'
}

const loginButton = {
  backgroundColor:'pink'
}

export class Login extends Component {


render(){
   return (
    <div style={style}>
      <form >
      <div>
        <input
         type="text"
         placeholder="email"
         />
       </div>
       <div>
         <input
          type="text"
          placeholder="password"
          />
        </div>
        <button style={loginButton}>
        <Link to='/main' >Login</Link>
        </button>
        <div>
        <Link to='/register'>Register</Link>
        </div>
      </form>
    </div>
  )
  }
}

export default Login

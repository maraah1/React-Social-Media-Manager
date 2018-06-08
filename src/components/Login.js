import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from './newLogo.png';

const logoo = {
  width: '50%',
  margin: 'auto',
  marginTop: '30px',
  color:'black'
}

const card = {
  backgroundColor: 'white',
  borderWidth: '1px',
  borderColor: 'grey',
  boxSizing: 'borderBox',
  width: '500px',
  margin:'auto',
  marginTop: '50px',
  padding: '30px',
  paddingTop: '60px',
  textShadow: '2px 2px 4px lightGrey',
  boxShadow: '0 8px 6px -6px grey'
};

const inputFields = {
  border: '1px solid white',
  boxShadow: '0 8px 6px -6px grey'
}

const loginButton = {
  backgroundColor:'pink',
  border: '1px solid pink',
  boxShadow: '0 8px 6px -6px grey'
}

export class Login extends Component {


render(){
   return (
  <div>
    <img style={logoo} src={logo}/>
    <div style={card}>
      <form >
      <div>
        <input
         style={inputFields}
         type="text"
         placeholder="email"
         />
       </div>
       <div>
         <input
          style={inputFields}
          type="text"
          placeholder="password"
          />
        </div>
        <button style={loginButton} >
        <Link to='/main' >Login</Link>
        </button>
        <div>
        <Link to='/register'>Register</Link>
        </div>
      </form>
    </div>
  </div>
  )
  }
}

export default Login

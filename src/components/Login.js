import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from './newLogo.png';


export default class Login extends Component {


render() {

   return (
        <div>
          <img style={styles.logo} src={logo}/>
            <div style={styles.card}>
              <form >
                <div>
                  <input
                   style={styles.inputFields}
                   type="text"
                   placeholder="email"
                   />
                 </div>
                 <div>
                   <input
                    style={styles.inputFields}
                    type="password"
                    placeholder="password"
                    />
                  </div>
                  <button style={styles.loginButton} >
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

const styles = {
  logo : {
    width: '50%',
    margin: 'auto',
    marginTop: '30px',
    color:'black'
  },

  card : {
    backgroundColor: 'lightGrey',
    borderWidth: '1px',
    borderColor: 'grey',
    boxSizing: 'borderBox',
    width: '500px',
    margin:'auto',
    marginTop: '50px',
    padding: '30px',
    paddingTop: '60px',
    textShadow: '2px 2px 4px lightGrey',
    boxShadow: '0 8px 6px -6px darkGrey'
  },

  inputFields : {
    border: '1px solid white',
    boxShadow: '0 8px 6px -6px grey'
  },

  loginButton : {
    color: 'black',
    backgroundColor:'pink',
    border: '1px solid pink',
    boxShadow: '0 8px 6px -6px grey'
  }

}

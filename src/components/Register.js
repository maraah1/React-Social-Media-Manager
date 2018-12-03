import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './newLogo.png';


export const Register = () => {

  return (
      <div>
        <img style={styles.logoo} src={logo}/>
          <div style={styles.card}>
            <form>
              <div>
                  <input style={styles.inputFields}
                  type="text"
                  placeholder="First Name"
                  />
               </div>
               <div>
                  <input style={styles.inputFields}
                  type="text"
                  placeholder="Last Name"
                  />
               </div>
                <div>
                    <input style={styles.inputFields}
                    type="text"
                    placeholder="email"
                    />
                </div>
                <div>
                    <input style={styles.inputFields}
                    type="text"
                    placeholder="password"
                    />
                </div>
                <div>
                    <input style={styles.inputFields}
                    type="text"
                    placeholder="confirm password"
                    />
                </div>
                <div>
                  <button style={styles.loginButton}>
                      <Link to='/'>Register</Link>
                  </button>
               </div>
               <div>
                  <Link to='/'>back</Link>
               </div>
            </form>
          </div>
      </div>
  )
}

const styles = {
  logoo : {
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
    boxShadow: '0 8px 6px -6px grey'
  },

  inputFields : {
    border: '1px solid white',
    boxShadow: '0 8px 6px -6px grey'
  },

  loginButton : {
    backgroundColor:'pink',
    border: '1px solid pink',
    boxShadow: '0 8px 6px -6px grey'
  },
}

export default Register

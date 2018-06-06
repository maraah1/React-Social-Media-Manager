import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export const Register = () => {
  return (
    <div>
      <form>
        <input
        type="text"
        placeholder="First Name"
        />
        <input
        type="text"
        placeholder="Last Name"
        />
        <input
        type="text"
        placeholder="email"
        />
        <input
        type="text"
        placeholder="password"
        />
        <input
        type="text"
        placeholder="confirm password"
        />
      <button>
      <Link to='/'>Register</Link>
      </button>
      <Link to='/'>back</Link>
      </form>
    </div>
  )
}

export default Register

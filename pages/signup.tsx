//this is a code for a sign up page. the sign up form has a field for name, email, password, password confirmation and a submit button

import React from 'react'
import styles from './signUp.module.scss';

export default function signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form className={styles.signupForm}>
        <label>Name
        <input type="text" placeholder="Name" />
        </label>
        <label>Email
        <input type="text" placeholder="Email" />
        </label>
        <label>Password
        <input type="password" placeholder="Password" />
        </label>
        <label>Confirm Password
        <input type="password" placeholder="Confirm Password" />
        </label>
        <button>Sign Up</button>
      </form>
    </div>

  )
}

import React, { useState } from 'react';
import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Auth = () => {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const dispatch = useDispatch();

  function changeEmailHandler(e){
    setEmailInput(e.target.value)
  }
  function changePasswordHandler(e){
    setPasswordInput(e.target.value)
  }
  
  function loginHandler(event) {
    event.preventDefault()
    if(emailInput.trim() !== '' && passwordInput === '123'){
      console.log('logged in succesfully')
      dispatch(authActions.login());
    }
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={changeEmailHandler}/>
          </div>

          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={changePasswordHandler}/>
            <p>The password is 123</p>
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
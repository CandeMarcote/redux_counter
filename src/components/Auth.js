import React, { useRef } from 'react';
import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const Auth = () => {
  const isAuth = useSelector(state => state.auth.auth);
  const dispatch = useDispatch();

  const emailInputRef = useRef('');
  const passwordInputRef = useRef('');

  function logInHandler(e) {
    e.preventDefault();

    if(emailInputRef.current.value.trim() === '' || !emailInputRef.current.value.includes('@') || passwordInputRef.current.value.trim() === '') {
      return;
    }
    console.log(emailInputRef.current.value)
    console.log(passwordInputRef.current.value)
    dispatch(authActions.isLoggedIn())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={logInHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailInputRef} />
          </div>

          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordInputRef} />
          </div>
          {!isAuth && <button type='submit'>Login</button>}
        </form>
      </section>
    </main>
  );
};

export default Auth;

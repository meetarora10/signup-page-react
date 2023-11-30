import React from 'react'
import styles from "./Login.module.css";
import Loginform from './Loginform';
import Password from './Password';
const Login = ({toggle}) => {
  return (
    <div className={styles.logCont}>
      <h2>Login</h2>
      <Loginform />
      <Password />
      <button className={styles.bt1} onClick={toggle}>Sign Up</button>
      <button className={styles.bt2}>Login</button>
    </div>
  )
}
export default Login

import React from 'react'
import styles from "./Signup.module.css";
import { IoPerson } from "react-icons/io5";
import Form from './Form';
import Password from './Password';
import Loginform from './Loginform';
const Signup = ({toggle}) => {
  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>
      <Form text="Name" icon={<IoPerson fontSize="20px" color='black'/>}/>
      <Loginform />
      {/* <Form text="Email" icon={<MdEmail fontSize="20px"/>}/> */}
      {/* <Form text="Password" icon={<FaLock fontSize="20px"/>}/> */}
      <Password />
      <button className={styles.bt1}>Sign Up</button>
      <button className={styles.bt2} onClick={toggle}>Login</button>
    </div>
  )
}
export default Signup

import React from 'react'
import styles from "./Password.module.css";
import { FaLock } from "react-icons/fa6";
const Password = () => {
  return (
    <form action="" className={styles.form2}>
        <label htmlFor="pass">Password <FaLock fontSize="20px" color='black'/></label>
        <input type="password" name="pass"/>
    </form>
  )
}
export default Password

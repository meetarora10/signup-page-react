import React from 'react'
import { MdEmail } from "react-icons/md";
import styles from "./Loginform.module.css";
const Loginform = () => {
  return (
    <form action="" className={styles.form3}>
        <label htmlFor="mail">Email <MdEmail fontSize="20px" color='black'/></label>
        <input type="email" name="mail"/>
    </form>
  )
}
export default Loginform

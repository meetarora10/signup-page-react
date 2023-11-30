import React from 'react'
import styles from "./Form.module.css";
const Form = (props) => {
  return (
    <form action="">
        <div className={styles.form}>
          <label htmlFor="text">{props.text} {props.icon}</label>
          <input name="text" />
        </div>
    </form>
  )
}
export default Form

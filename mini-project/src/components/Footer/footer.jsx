import React from 'react'
import Styles from "../../styles/global.module.css"
import footerLogo from "../../assets/logo3.png"

const Footer = () => {
  return (
    <div className={`${Styles.row2} ${Styles.bg_primary2} ${Styles.footer}`}>
        <img src={footerLogo} alt="logo" />
        <h4>Apple ID</h4>
        <p>@Copyright Apple ID 2023</p>
    </div>
  )
}

export default Footer
import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import * as style from "../styles/common.module.scss"

//fontswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faLine,faXTwitter } from "@fortawesome/free-brands-svg-icons"


const Sns = () => {

  return (
    <div className={style.snsWrapper}>
      <a href="https://www.facebook.com/kofujc" target={"_blank"}><div className={style.faceIcon}><span><FontAwesomeIcon icon={faFacebookF}/></span></div></a>
      <a href="https://www.instagram.com/kofujc/" target={"_blank"}><div className={style.instaIcon}><span><FontAwesomeIcon icon={faInstagram}/></span></div></a>
      <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=kofujc" target={"_blank"}><div><span><FontAwesomeIcon icon={faLine}/></span></div></a>
      <a href="https://x.com/jci_kofu" target={"_blank"}><div><span><FontAwesomeIcon icon={faXTwitter}/></span></div></a>
    </div>
  )
}

export default Sns
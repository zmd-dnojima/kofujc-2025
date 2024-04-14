import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { Link, graphql } from "gatsby" 
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

//fontswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faEnvelope,faPhone } from "@fortawesome/free-solid-svg-icons"

import * as style from "../styles/common.module.scss"



const ContactArea = (props) => {

    return (
        <div className={style.contactArea}>
                    {/* <div className={style.bg}><StaticImage src="../images/contact_bg.jpg" alt="contact_bg" placeholder="blurred" quality ={90} layout="fullWidth"/></div> */}
                    <div className={style.gridbox}>
                        <div className={style.telbox}>
                            <div className={style.telNumber}><Link to="tel:0552755141"><span><FontAwesomeIcon icon={faPhone}/></span> 055-275-5141</Link></div>
                            <div className={style.faxNumber}>FAX：055-275-5143</div>
                        </div>
                        <Link to="/contact/">
                        <div className={style.btnbox}>
                                <div className={style.envelop}><span><FontAwesomeIcon icon={faEnvelope}/></span> お問い合わせ</div>
                                <div className={style.chev}><span><FontAwesomeIcon icon={faChevronRight}/></span></div>
                        </div>
                        </Link>
                    </div>
                    
        </div>
    )
}

export default ContactArea
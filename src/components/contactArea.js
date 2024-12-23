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
                        <div className={style.contactTxt}>
                            <div className={style.txt_1}>その一歩で、<br/>君が変わる、<br/>まちが変わる</div>
                            <div className={style.txt_2}>一般社団法人甲府青年会議所は<br/>2025年度入会募集しております</div>
                        </div>
                        <Link to="/joinus/">
                        <div className={style.btnbox}>
                                <div className={style.envelop}>入会案内</div>
                        </div>
                        </Link>
                    </div>
                    
        </div>
    )
}

export default ContactArea
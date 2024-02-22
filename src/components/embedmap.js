import React from "react"
import { useInView } from 'react-intersection-observer'
import * as style from "../styles/sub.module.scss"

const EmbedMap = ({children}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <div ref = {ref}>
            {inView ? ( 
                <div> {children}</div>            
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default EmbedMap
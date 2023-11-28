import React from "react"
import { useNavigate } from "react-router-dom"
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
import Languageoption from "../components/language-dropdown"
import Menu from "../components/menu"
const Contactus = () => {
    const history = useNavigate();
    const handleRedirect = () => {
        history('/aboutus')
    }
    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(
        <div style={{marginTop:'50px'}}>
            <Menu/>
            <Languageoption  onChange={(e)=> handleClick(e)}/>
            <h1>{t('welcome')} {t('contact')} || Seema {t('holiday')} Developer</h1>
            <input/>
            <button className="theme-btn" onClick={handleRedirect}>Submit</button>
        </div>
        
    )
}
export default Contactus
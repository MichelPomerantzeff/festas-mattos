import React from 'react';
import '../css/Footer.css';
import { Email, Phone, LocationOn, WhatsApp } from "@mui/icons-material"

function Footer(props) {
    return (
        <div className="footer_container">
            <h1>Logo</h1>
            <div className="phone"> <Phone /> (11) "99999-9999"</div>
            <div className="email"><Email /> "exemplo@exemplo.com"</div>
            <div className="address"><LocationOn /> Rua "Nome da rua" , "999" - "Bairro" - "Cidade"</div>
            <a className="whatsapp_container" href="https://wa.me/351932744724" target="_blank" rel="noopener noreferrer">
                <WhatsApp className='whatsapp' />
            </a>
        </div>
    );
}

export default Footer;
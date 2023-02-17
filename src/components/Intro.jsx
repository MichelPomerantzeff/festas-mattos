import React from 'react';
import image from '../assets/images/festa5.jpg'
import '../css/Intro.css';

function Intro() {
    return (
        <div>
            <div className='intro'>
                <img className='intro_img' src={image} alt="" />
                <div className="cover">
                    <h1>Festas Mattos</h1>
                </div>
            </div>
            <p className='intro_description'>
                Fundada em [data de inauguração], a [nome da empresa] nasceu com o objetivo de proporcionar experiências inesquecíveis e eventos personalizados aos seus clientes. Com um time altamente capacitado e dedicado, a empresa tem como ideia principal criar festas que tragam alegria, entretenimento e, acima de tudo, memórias duradouras. Desde sua inauguração, a [nome da empresa] vem se destacando no mercado, oferecendo soluções completas e inovadoras para todas as ocasiões, desde pequenas comemorações até grandes eventos corporativos.
            </p>
        </div>
    );
}

export default Intro;
import React from 'react';
import '../css/PresentationBlock.css';

function Block(props) {
    return (
        <div className='presentation_container'>

            {
                window.innerWidth < 1024 ?

                    <div className='presentation darker_bg'>
                        <div className='paragraph'>
                            <h1>{props.data.title}</h1>
                            <p>
                                {props.data.paragraph}
                            </p>
                        </div>
                        <img className='display_image' src={props.data.image} alt="" />
                    </div>

                    :

                    props.data.id % 2 === 0 ?

                        <div className='presentation'>
                            <img className='display_image' src={props.data.image} alt="" />
                            <div className='paragraph'>
                                <h1>{props.data.title}</h1>
                                <p>
                                    {props.data.paragraph}
                                </p>
                            </div>
                        </div>

                        :

                        <div className='presentation darker_bg'>
                            <div className='paragraph'>
                                <h1>{props.data.title}</h1>
                                <p>
                                    {props.data.paragraph}
                                </p>
                            </div>
                            <img className='display_image' src={props.data.image} alt="" />
                        </div>
            }
        </div>
    );
}

export default Block;
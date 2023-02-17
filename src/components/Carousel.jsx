import '../css/Carousel.css';
import images from '../images'
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Carousel(props) {

    const carousel = useRef();

    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth)
    }, [])

    return (
        <motion.div className='carousel_container'>

            <h1>Carousel</h1>

            <motion.div
                className="carousel"
                whileTap={{ cursor: "grabbing" }}
                drag="x"
                dragConstraints={{right:0, left: -width}}
                ref={carousel}
            >
                {
                    images.map(img => {
                        return (
                            <motion.div key={img} className="carousel_image">
                                <img src={img} alt="Error" />
                            </motion.div>
                        )
                    })
                }
            </motion.div>


            <div className="arrow_buttons">
                <button>Left</button>
                <button>Right</button>
            </div>


        </motion.div>
    );
}

export default Carousel;
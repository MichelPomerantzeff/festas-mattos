import Intro from './Intro';
import Carousel from './Carousel';
import PresentationBlock from './PresentationBlock';
import presentationData from '../presentationData'

function Main() {
    return (
        <div className="main">

            <Intro/>

            <Carousel/>

            {
                presentationData.map(data => {
                    return (
                        <div key={data.id}>
                            <PresentationBlock data={data} />
                        </div>
                    )
                })
            }

        </div>
    );
}

export default Main;
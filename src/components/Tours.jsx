import Title from "./Title"
import {tours} from '../../data'
import Tour from "./Tour"

const Tours = () => {
    return (
    
    <section className="section tours" id="tours">
        <div className="section-title">
            <Title title="featured" subtitle="tours"/>
        </div>
    
        <div className="section-center tours-center">

            {tours.map((tour)=> {
                    return (
                    
                    // <Tour key={tour.id} image={tour.image} date={tour.date} title={tour.title} info={tour.info} location={tour.location} duration={tour.duraton} price={tour.price}/> 

                    <Tour key={tour.id} {...tour}/>

                    )
                }
            )
            }
        </div>
    </section>
)
}

export default Tours
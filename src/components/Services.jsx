import React from 'react'
import Title from './Title'
import {services} from '../../data'
import Service from './Service'

const Services = () => {
    return (
    
    <section className="section services" id="services">
        <div className="section-title">
            <Title title="our" subtitle="services"/>
        </div>
        <div className="section-center services-center">
    



            {services.map((service)=> {
                return (<Service key={service.id} icon={service.icon} title={service.title} info={service.info}/> )
            })}
            
         


        </div>
    </section>


  )
}

export default Services
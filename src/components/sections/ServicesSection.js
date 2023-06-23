import ServiceTile from "../common/ServiceTile";
import { ReactComponent as EngIcon } from "../../icons/tools.svg";
import {ReactComponent as DraftIcon } from "../../icons/drafting.svg"
import {ReactComponent as CostIcon } from "../../icons/cost.svg"

export const ServiceSection = () => {

    const services = [
        { 
            title: "Engineering Design",
            paragraph: "We are a team of professional Mechanical Designers with extensive experience in Oil & Gas, Power Generation and various equipment fabrication. Our main goal is to provide the highest quality mechanical design and drawing package on schedule and on budget."
        },
        {
            title: "Drafting Services",
            paragraph: ""
        },
        {
            title: "Cost Effectiveness",
            paragraph: ""
        }
    ]

    return(
        <div className='bg-ultrablack py-20'>
            <h1 className='text-white text-5xl font-semibold'>Our Services</h1>
            <div className='container mx-auto flex flex-row gap-10 pt-10'>
                <ServiceTile title={services[0].title} paragraph={services[0].paragraph} icon={<EngIcon className="w-20"/>}/>
                <ServiceTile title={services[1].title} icon={<DraftIcon className="w-20"/>} />
                <ServiceTile title={services[2].title} icon={<CostIcon className="w-16"/>} />
            </div>

        </div>
    )
} 

export default ServiceSection
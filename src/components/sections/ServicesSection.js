import ServiceTile from "../common/ServiceTile";
import { ReactComponent as EngIcon } from "../../icons/tools.svg";
import {ReactComponent as DraftIcon } from "../../icons/drafting.svg"
import {ReactComponent as CostIcon } from "../../icons/cost.svg"

export const ServiceSection = () => {

    const services = [
        { 
            title: "Engineering Design",
            paragraph: "We are a team of professional Mechanical Designers with extensive experience in Oil & Gas, Power Generation and various equipment fabrication. Our main goal is to provide the highest quality mechanical design and drawing package on schedule and on budget.",
            iconW: "w-20",
            icon: <EngIcon />
        },
        {
            title: "Drafting Services",
            paragraph: "",
            iconW: "w-20",
            icon: <DraftIcon />
        },
        {
            title: "Cost Effectiveness",
            paragraph: "",
            iconW: "w-16",
            icon: <CostIcon />
        }
    ]

    return(
        <div className='bg-ultrablack py-20'>
            <h1 className='text-white text-5xl font-semibold py-20 '>Our Services</h1>
            <div className=' px-60 flex flex-row gap-10 pt-10'>
                {services.map((s) => (
                    <ServiceTile title={s.title} paragraph={s.paragraph} iconW={s.iconW} icon={s.icon} />
                ))}
            </div>

        </div>
    )
} 

export default ServiceSection
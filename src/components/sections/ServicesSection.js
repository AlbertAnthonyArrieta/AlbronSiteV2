import ServiceTile from "../common/ServiceTile";
import { ReactComponent as EngIcon } from "../../icons/tools.svg";
import {ReactComponent as DraftIcon } from "../../icons/drafting.svg"
import {ReactComponent as CostIcon } from "../../icons/cost.svg"

export const ServiceSection = () => {
    return(
        <div className='bg-ultrablack py-20'>
            <h1 className='text-white text-5xl font-semibold'>Our Services</h1>
            <div className='container mx-auto flex flex-row gap-1 pt-10'>
                <ServiceTile title='Engineering Design' icon={<EngIcon />}/>
                <ServiceTile title='Drafting Services' icon={<DraftIcon />} />
                <ServiceTile title='Cost Effectiveness' icon={<CostIcon />} />
            </div>

        </div>
    )
} 

export default ServiceSection
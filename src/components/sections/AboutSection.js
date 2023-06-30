import p2 from '../../images/p2.jpg'
import logo from '../../images/logo.png'
import { Header } from '../common/Header'

export const AboutSection = () => {
    return (
        <div id='about' className='bg-ultrablack py-20'>
            <Header text="About Us" />

            <div className='flex container mx-auto gap-14 py-20 items-center'>
                <div className='flex-1'>
                    <img src={logo} className='w-4/6'></img>
                </div>
                <div className='flex-1 justify-center'>
                    <p className='text-white text-left text-xl align-middle'>Albron Designs & Graphic Systems Incorporated is Calgary based and has been providing engineering design and drafting services to canadian companies since 2012 from a wide range of industries including Oil & Gas, Power Generation, Water Treatment, Manufacturing, Equipment production, Mining, Civil/Structural Construction, and General Steel Fabrication.</p>
                    <br></br>
                    <p className='text-white text-left text-xl align-middle'>For years, we, have established strong relationship with our valued clients who are always relying on the quality service we provide. It is our pride to be an integral part of our client's business and we will remain commited to continuously providing our quality services and exceed client’s expectations.</p>
                </div>
            </div>

            <div className='flex container mx-auto gap-14 py-20 items-center'>
                <div className='flex-1 justify-center'>
                    <p className='text-white text-left text-xl align-middle'>Albron Designs & Graphic Systems Incorporated is Calgary based and has been providing engineering design and drafting services to canadian companies since 2012 from a wide range of industries including Oil & Gas, Power Generation, Water Treatment, Manufacturing, Equipment production, Mining, Civil/Structural Construction, and General Steel Fabrication.</p>
                </div>
                <div className='flex-1'>
                    <img src={p2}></img>
                </div>
            </div>


        </div>
    )
}

export default AboutSection
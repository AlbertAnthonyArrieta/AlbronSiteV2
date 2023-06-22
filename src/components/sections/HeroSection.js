import Herobanner from '../../images/p1.jpg';

export const HeroSection = () => {
    return (
        <div className='bg-ultrablack'>
            <div className='flex'>
                <div className="flex items-center justify-center">
                    <h1 className='text-white text-8xl font-semibold text-left ml-10'>Engineering Design <span className='text-primary'>&</span> Drafting</h1>
                </div>
                <div className="flex-auto">
                    <img src={Herobanner} ></img>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
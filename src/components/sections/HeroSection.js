import Herobanner from '../../images/p1.jpg';
import Buttonlg from '../common/Button';

export const HeroSection = () => {
    return (
        <div className='bg-ultrablack'>
            <div className='flex'>
                <div className="flex justify-center flex-col gap-10 mx-24">
                    <div className='flex items-start'>
                        <h1 className='text-white text-8xl font-semibold text-left'>Engineering Design <span className='text-primary'>&</span> Drafting</h1>
                    </div>
                    <div className='flex items-start'>
                        <Buttonlg className='text-left' color='bg-primary' text='CONTACT US' />
                    </div>
                </div>
                <div className="flex-auto">
                    <img src={Herobanner} ></img>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
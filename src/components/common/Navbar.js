import logo from '../../images/logo.png'

export const Navbar = () => {
    return (
        <nav className='bg-black text-white py-2 sticky top-0'>
            <div className='container mx-auto flex justify-between'>
                <a href="#home" className='flex inline-block items-center gap-3'>
                    <img className='w-20' src={logo} />
                    <div>
                        <p href="#home" className='font-semibold text-2xl'>ALBRON DGS INC</p>
                        <p className='font-regular text-xs'>Engineering Design & Drafting</p>
                    </div>

                </a>
                <div className='flex items-center'>
                    <a href="#home" className='mx-4 hover:text-primary text-xl'>Home</a>
                    <a href="#about" className='mx-4 hover:text-primary text-xl'>About</a>
                    <a href="#services" className='mx-4 hover:text-primary text-xl'>Services</a>
                    <a href="#projects" className='mx-4 hover:text-primary text-xl'>Projects</a>
                    <a href="#contact" className='mx-4 hover:text-primary text-xl'>Contact</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
export const Buttonlg = ({color, size, text, func}) => {
    return (
        <a href='#contact' className="bg-primary text-white py-5 px-16 rounded-full hover:bg-primarydark">
            <h1 className='text-3xl font-semibold'>{text}</h1>
        </a>
    )
}

export default Buttonlg;
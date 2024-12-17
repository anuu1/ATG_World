import Rectangle from '../assets/Rectangle 2.png'
import RectangleMobile from '../assets/RectangleMobile.png'
import { FaArrowLeft } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className=' relative h-[440px] max-md:h-[340px]'>
      <img src={Rectangle} alt="Main Image" className=' w-full h-full max-md:hidden' />
      <img src={RectangleMobile} alt="Main Image Mobile" className=' w-full h-full md:hidden' />
      <div className=" absolute z-20 top-0 h-full w-full bg-black opacity-60"></div>
      <div className=" absolute z-30 h-full w-full top-0 pl-[220px] max-md:pl-[18px]">
        <div className=" md:hidden absolute z-50 top-5 flex justify-between items-center w-[95%]">
          <FaArrowLeft color='white' size={24} />
          <button className=' text-white border-2 border-white p-2 mr-3'>Join Group</button>
        </div>
        <div className=" absolute top-[300px] font-ibm text-white max-md:top-[240px]">
          <h3 className='font-bold text-4xl max-md:text-[30px] max-sm:text-[22px]'>Computer Engineering</h3>
          <h4 className=' font-thin text-[15px] pt-1 max-md:text-[18px] max-sm:text-[15px]'>142,765 Computer Engineers follow this</h4>
        </div>
      </div>
    </div>
  )
}

export default Hero
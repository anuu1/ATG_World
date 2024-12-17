import UnionImg from "../assets/Union 1.svg";
import Dot from "../assets/Dot.svg";
import Logo from "../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = ({ modalOpener }) => {
    function openModal() {
        modalOpener(true)
    }

    return (
        <nav className=" h-[72px] flex items-center px-[72px] max-md:px-[10px] justify-between max-md:h-[50px]">
            <div className=" flex h-full items-center font-inter font-[400]">
                <h3 className=" flex items-center text-[24px] text-[#27A365] max-sm:hidden">ATG
                    <span className=" flex h-[19px] items-end">
                        <img src={Dot} alt="" className=" h-1 pl-1" />
                    </span>
                    <span className=" text-[#5C5D5D]">W</span>
                </h3>
                <img src={UnionImg} alt="" className=" h-5 max-sm:hidden" />
                <h3 className=" flex items-end text-[24px] text-[#5C5D5D] max-sm:hidden">RLD</h3>
                <img src={Logo} alt="ATG WORLD" className=" h-4 w-[100px] sm:hidden" />
            </div>
            <div className=" h-[42px] flex items-center bg-[#F2F2F2] max-w-[360px] w-[30%] rounded-[21px] px-5 gap-2 max-sm:hidden max-md:h-[60%]">
                <IoMdSearch size={22} color="#7D7D7D" />
                <input type="text" placeholder="Search for your favorite groups in ATG" className="max-w-[242px] w-[90%] font-ibm text-[#5C5C5C] text-sm bg-[#F2F2F2] outline-none" />
            </div>
            <div className=" text-[16px] font-ibm flex font-semibold items-center cursor-pointer max-sm:text-[13px]">
                <h4 onClick={() => openModal()} className=" text-[#2E2E2E] hover:underline transition-all">Create account.
                    <span className=" text-[#2F6CE5]"> It's free!</span>
                </h4>
                <IoMdArrowDropdown color="#2E2E2E" />
            </div>
        </nav>
    )
}

export default Navbar
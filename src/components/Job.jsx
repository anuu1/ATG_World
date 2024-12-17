import { IoEyeOutline } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbBriefcase2 } from "react-icons/tb";
import { useState } from "react";

const Job = ({ title, company, location, link, author, imageURL, authorIconURL, views }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="w-full flex flex-col border-2 border-[#E0E0E0] rounded-lg font-ibm">
            {
                imageURL &&
                <div className=" w-full h-[220px]">
                    <img src={imageURL} alt={title} className="w-full h-full" />
                </div>
            }
            <div className=" p-4 flex flex-col gap-1 h-full">
                <div className=" flex items-center gap-1">
                    <h2 className="text-sm">💼️</h2>
                    <h2 className="text-lg font-medium">Job</h2>
                </div>
                <div className=" flex items-center justify-between">
                    <h2 className="text-[22px] font-bold w-[90%]">{title}</h2>
                    <button>
                        <BsThreeDots onClick={() => setIsMenuOpen(!isMenuOpen)} size={28} className=" cursor-pointer hover:bg-slate-200" />
                        {isMenuOpen && (
                            <div className=" absolute flex flex-col items-start justify-center gap-2 bg-white rounded-sm shadow-lg -translate-x-[130px] border w-[160px] h-[102px]">
                                <p className="text-sm w-full pl-3 text-left hover:bg-slate-100">Edit</p>
                                <p className="text-sm w-full pl-3 text-left hover:bg-slate-100">Report</p>
                                <p className="text-sm w-full pl-3 text-left hover:bg-slate-100">Option 3</p>
                            </div>
                        )
                        }
                    </button>
                </div>
                <div className=" flex gap-10 my-2">
                    <div className=" flex items-center gap-2">
                        <TbBriefcase2 size={20} />
                        <p className=" text-[15px] font-medium max-sm:hidden">{company}</p>
                        <p className=" text-[15px] font-medium sm:hidden">{ (company.length) > 20 ? company.substring(0, 20) + '...' : company}</p>
                    </div>
                    <div className=" flex items-center gap-2">
                        <MdOutlineLocationOn size={20} />
                        <p className=" text-[15px] font-medium">{location}</p>
                    </div>
                </div>
                <div className=" flex w-full h-10 items-center justify-center border border-[#A9AEB8] rounded-[8px]">
                    <a href={link}>
                        <button className=" text-[#02B875] text-[14px] font-bold">
                            Apply on Timesjobs
                        </button>
                    </a>
                </div>
                <div className="flex justify-between mt-3 items-center h-full">
                    <div className=" flex items-center gap-3">
                        <img src={authorIconURL} alt={author} className=" w-12 h-12" />
                        <div className="">
                            <h3 className="font-bold">{author}</h3>
                            <p className=" text-[12px] sm:hidden">
                                {
                                    views > 999 ? (views / 1000).toFixed(1) + 'k views' : views + ' views'
                                }
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center h-full gap-7">
                        <div className="flex items-center gap-1 max-sm:hidden">
                            <IoEyeOutline size={18} />
                            <p className=" text-[14px]">
                                {
                                    views > 999 ? (views / 1000).toFixed(1) + 'k views' : views + ' views'
                                }
                            </p>
                        </div>
                        <button className="flex items-center p-2 bg-slate-200">
                            <IoMdShare size={13} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Job
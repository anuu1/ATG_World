import { IoEyeOutline } from "react-icons/io5";
import Google from '../assets/GoogleLogo.svg'
import Facebook from '../assets/FacebookLogo.svg'
import { useState } from "react";

const Login = ({ setLogin }) => {
    const [showPassword, setShowPassword] = useState(false)

    function togglePassword(e) {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    return (
        <div>
            <div className="">
                <form action="" className=" mt-6">
                    <div className="w-[320px] max-[375px]:w-[300px] h-[46px] flex items-center bg-[#F7F8FA] border border-[#D9D9DB] rounded-sm">
                        <input type="email" placeholder="Email" name="email" id="email" className=" w-4/5 h-full m-2 outline-none bg-[#F7F8FA]" />
                    </div>
                    <div className="w-[320px] max-[375px]:w-[300px] h-[46px] flex items-center bg-[#F7F8FA] border border-[#D9D9DB] rounded-sm justify-between">
                        <input type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" id="password" className="w-4/5 h-full m-2 outline-none bg-[#F7F8FA]" />
                        <button className="mr-4">
                            <IoEyeOutline onClick={(e) => togglePassword(e)} color="#8A8A8A" size={18} className=" cursor-pointer" />
                        </button>
                    </div>
                </form>
            </div>
            <div className=" mt-5 max-md:mt-8 w-[320px] max-[375px]:w-[300px] flex justify-between items-center">
                <button className="h-10 w-full max-md:w-1/2 flex items-center justify-center bg-[#2F6CE5] rounded-[20px] text-white text-base">Sign In</button>
                <p onClick={() => setLogin(false)} className=" md:hidden underline cursor-pointer">or, Sign up</p>
            </div>
            <div className="flex flex-col gap-2 mt-3 max-md:mt-8">
                <button className="flex h-10 justify-center items-center border border-[#D9D9DB] w-[320px] max-[375px]:w-[300px] gap-4 rounded-sm">
                    <img src={Facebook} alt="Facebook" className="h-4 w-4" />
                    <p className="text-sm font-semibold">Sign in with Facebook</p>
                </button>
                <button className="flex h-10 justify-center items-center border border-[#D9D9DB] w-[320px] max-[375px]:w-[300px] gap-4 rounded-sm">
                    <img src={Google} alt="Google" className="h-4 w-4" />
                    <p className="text-sm font-semibold">Sign in with Google</p>
                </button>
            </div>
            <div className="mt-6 flex w-[320px] max-[375px]:w-[300px] items-center justify-center">
                <h2 className="font-bold text-[13px] cursor-pointer hover:underline max-md:text-center">Forgot Password?</h2>
            </div>
        </div>
    )
}

export default Login
import { MdGroupAdd, MdOutlineLocationOn } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiTwotoneLike, AiOutlineExclamationCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { articles, events, educational_posts, jobs, groups } from "../data/data";
import ShowPosts from "./ShowPosts";
import { useState } from "react";

const PostsContainer = () => {
    const [postType, setPostType] = useState('all')
    const [activeClass, setActiveClass] = useState('all')
    const [totalPostsCount, setTotalPostsCount] = useState(articles.length + educational_posts.length + events.length + jobs.length)

    const active = 'border-b border-black text-black font-bold'

    function activeNavElementHandler(type) {
        setPostType(type);
        setActiveClass(type);
        if (type === 'all') {
            setTotalPostsCount(articles.length + educational_posts.length + events.length + jobs.length)
        } else if (type === 'article') {
            setTotalPostsCount(articles.length)
        } else if (type === 'education') {
            setTotalPostsCount(educational_posts.length)
        } else if (type === 'event') {
            setTotalPostsCount(events.length)
        } else if (type === 'job') {
            setTotalPostsCount(jobs.length)
        }
    }

    return (
        <section className="px-[200px] mt-12 font-ibm max-xl:px-[100px] max-lg:px-[20px] max-md:px-[10px] max-sm:px-[10px] max-md:mt-9">
            <nav className=" sticky top-0 z-30 bg-white pt-5 flex justify-between border-slate-300 border-b-2 max-md:border-none max-md:pt-0 max-sm:relative">
                <div className=" flex text-[16px] gap-6 max-md:hidden">
                    <p
                        onClick={() => activeNavElementHandler('all')}
                        className={`cursor-pointer text-[#8A8A8A] hover:border-b hover:border-black hover:text-black hover:font-bold ${activeClass === 'all' ? active : ''}`}
                    >
                        All Posts ({articles.length + educational_posts.length + events.length + jobs.length})
                    </p>
                    <p
                        onClick={() => activeNavElementHandler('article')}
                        className={`cursor-pointer text-[#8A8A8A] hover:border-b hover:border-black hover:text-black hover:font-bold ${activeClass === 'article' ? active : ''}`}
                    >
                        Article
                    </p>
                    <p
                        onClick={() => activeNavElementHandler('event')}
                        className={`cursor-pointer text-[#8A8A8A] hover:border-b hover:border-black hover:text-black hover:font-bold ${activeClass === 'event' ? active : ''}`}
                    >
                        Event
                    </p>
                    <p
                        onClick={() => activeNavElementHandler('education')}
                        className={`cursor-pointer text-[#8A8A8A] hover:border-b hover:border-black hover:text-black hover:font-bold ${activeClass === 'education' ? active : ''}`}
                    >
                        Education
                    </p>
                    <p
                        onClick={() => activeNavElementHandler('job')}
                        className={`cursor-pointer text-[#8A8A8A] hover:border-b hover:border-black hover:text-black hover:font-bold ${activeClass === 'job' ? active : ''}`}
                    >
                        Job
                    </p>
                </div>
                <div className=" flex gap-4 mb-2 max-md:hidden">
                    <button className=" flex w-[120px] h-9 items-center bg-[#EDEEF0] p-2 text-sm justify-between rounded-[4px] hover:bg-slate-300">
                        <p>Write a Post</p>
                        <IoMdArrowDropdown />
                    </button>
                    <button className=" flex w-[110px] h-9 items-center bg-[#2F6CE5] text-white p-2 text-sm justify-between rounded-[4px] hover:bg-blue-800">
                        <MdGroupAdd />
                        <p>Join Group</p>
                    </button>
                </div>
                <div className=" flex w-full justify-between md:hidden">
                    <h1 className=" text-2xl font-bold ml-2">Posts({totalPostsCount})</h1>
                    <div className=" flex h-8 items-center bg-[#F1F3F5] p-5 mb-4 rounded-xl">
                        <p className="font-bold text-base">Filter: </p>
                        <select onChange={(e) => activeNavElementHandler(e.target.value)} name="filters" id="filters" className=" bg-[#F1F3F5] outline-none cursor-pointer font-bold flex items-center h-10 text-sm pl-1">
                            <option value="all">All</option>
                            <option value="article">Article</option>
                            <option value="education">Education</option>
                            <option value="event">Event</option>
                            <option value="job">Job</option>
                        </select>
                    </div>
                </div>
            </nav>
            <div className=" flex justify-between max-md:justify-center mt-3 gap-8">
                <div className="max-w-[690px] w-[80%] max-sm:w-full max-sm:max-w-full">
                    <ShowPosts postType={postType} />
                </div>
                <div className=" w-60 flex flex-col mt-10 max-md:hidden">
                    <div className="sticky top-[72px] pt-4">
                        <div className="flex items-center mb-5 h-8 w-full gap-1 border-b border-slate-300">
                            <MdOutlineLocationOn size={18} />
                            <input type="text" placeholder="Enter your location" className=" outline-none" />
                            <RxCross2 size={20} />
                        </div>
                        <div className="flex justify-between text-slate-500 mb-10">
                            <AiOutlineExclamationCircle size={16} />
                            <p className=" text-[12px] w-[90%]">Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                        <div className="flex w-full mb-5">
                            <div className=" flex w-full gap-1">
                                <AiTwotoneLike size={18} />
                                <p className="text-sm">RECOMMENDED GROUPS</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col w-full">
                                {groups.map((group, index) => (
                                    <div key={index} className=" flex h-9 items-center justify-between w-full mb-5">
                                        <div className="flex h-full items-center gap-3">
                                            <img src={group.iconURL} alt={group.name} />
                                            <h2 className="text-sm">{group.name}</h2>
                                        </div>
                                        <button className=" text-[12px] rounded-2xl bg-[#EDEEF0] px-3 py-1 hover:bg-slate-300">Follow</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className=" flex w-full justify-end">
                            <p className=" text-[#2F6CE5] text-[12px] cursor-pointer hover:text-purple-500">See More...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostsContainer
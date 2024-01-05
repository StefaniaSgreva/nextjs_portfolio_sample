import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpeg";

const Banner = () => {
    return (
        <div className="wrapper flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-44 h-44 rounded-full bg-black">
                < Image className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover" src={ProfileImg} alt="Profile Image"/>
            </div>
            {/* Description */}
            <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
                <h1 className="text-5xl font-bold text-white text-center md:text-start">John Doe</h1>
                <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide text-center md:text-start">Full Stack Developer</h2>
                <p className="text-base tracking-wide text-center md:text-start">Fueled by innovation and a love for efficient code. I blend creativity and technical expertise to craft user-centric digital solutions. From front-end interfaces to back-end systems, I strive for impactful applications merging function with style.</p>
            </div>
        </div>
    );
};

export default Banner;
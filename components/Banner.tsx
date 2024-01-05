import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpeg";

const Banner = () => {
    return (
        <div className="py-20 flex items-center gap-10">
            {/* Image */}
            <div className="w-44 h-44 rounded-full bg-black">
                < Image className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover" src={ProfileImg} alt="Profile Image"/>
            </div>
            {/* Description */}
            <div className="w-3/4">
                <h1>John Doe</h1>
                <h3>Full Stack Developer</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio dolorum deserunt, ea soluta minima vero minus nihil odio est unde, dolor corporis, omnis debitis id amet qui natus ipsam recusandae.</p>
            </div>
        </div>
    );
};

export default Banner;
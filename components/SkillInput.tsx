type Props={
    title:string 
    link:string
}

const SkillInput = ({title, link}: Props) => {
  return (
    <a href={link} target="_blank">
        <div className="w-fit border border-blue-800 px-6 py-2 text-lg tracking-wide bg-transparent text-gray-400 hover:text-white hover:border-blue-600 hover:bg-black rounded-lg duration-300">
            {title}
        </div>
    </a>
  )
}

export default SkillInput
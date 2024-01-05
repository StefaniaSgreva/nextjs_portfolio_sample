import SkillInput from "./SkillInput"
import Title from "./Title"
import {GiSkills} from "react-icons/gi"

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills/>}/>
      <div className="flex gap-4 flex-wrap">
        <SkillInput title="HTML5" link="https://developer.mozilla.org/en-US/docs/Web/HTML"/>
        <SkillInput title="CSS3" link="https://developer.mozilla.org/en-US/docs/Web/CSS"/>
        <SkillInput title="JavaScript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"/>
        <SkillInput title="React.js" link="https://reactjs.org/docs/getting-started.html"/>
        <SkillInput title="Node.js" link="https://nodejs.org/en/docs/"/>
        <SkillInput title="Express.js" link="https://expressjs.com/"/>
        <SkillInput title="MongoDB" link="https://docs.mongodb.com/"/>
        <SkillInput title="SQL" link="https://www.w3schools.com/sql/"/>
        <SkillInput title="Python" link="https://docs.python.org/3/"/>
        <SkillInput title="Django" link="https://docs.djangoproject.com/en/stable/"/>
        <SkillInput title="Git" link="https://git-scm.com/doc"/>
        <SkillInput title="AWS" link="https://aws.amazon.com/documentation/"/>
      </div>
    </div>
  )
}

export default Skills
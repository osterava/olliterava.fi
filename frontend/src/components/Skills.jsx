import React from "react"

const Skills = () => {
    const skills = [
        { name: "Python", level: 60 },
        { name: "React", level: 76 },
        { name: "CSS", level: 60 },
        { name: "Node.js", level: 66 },
        { name: "C#", level: 45 },
        { name: "Java", level: 45 }
      ]

      const languages = [
        { name: "Finnish", level: 100},
        { name: "English", level: 70},
        { name: "Swedish", level: 35},
      ]

  return (
    <div className='skill'>
        <h2> Skills </h2>
            <div className="skills">
            {skills.map((skill, index) => (
                <div className="progress-container" key={index}>
                    <div className="progress-description">{skill.name}</div>
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{ width: `${skill.level}%` }} />
                    </div>
                </div>
            ))}

            </div>
        <h2> Languages </h2>
            <div className='skills'>
                {languages.map((language,index) => (
                <div className="progress-container" key={index}>
                    <div className="progress-description">{language.name}</div>
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{ width: `${language.level}%` }} />
                    </div>
                </div>
                ))}
            </div>
    </div>
    
  )
}


export default Skills

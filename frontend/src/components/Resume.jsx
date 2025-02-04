import React from "react"

const Resume = () => {

    return (
        <div className="resume">

          <section className="skills">
            <h2>ABOUT ME</h2>
            <p> I am studying Information and Software Engineering at
                the University of Jyväskylä, and I have gained
                experience in software development through various
                project courses. My technical skills include React, CSS,
                Python, Java, and C#. My work experience in customer
                service and sales has enhanced my customer-oriented
                approach and problem-solving skills. My goal is to
                develop into a versatile professional in the software
                industry.
            </p>
          </section>

          <section className="skills">
            <h2>EXPERIENCE</h2>
            <div className="job">
            <p><strong> Salesperson </strong><i>Rusta</i></p>
            <p> Cashier work, forklift driving, warehouse management, inventory and shelving. In addition, store-build tasks: construction of new sales solutions: implementation of room changes and of course most importantly customer service. </p>
            <p>Jan 2022 - Present</p>
            </div>

            <div className="job">
            <p><strong>Head of Educational Politics, Member of the Board </strong> <i> Algo ry</i></p>
            <p>My task is to advocate engineering students’ rights and convey information about studies to different parties. I participate in different meetings to make sure that student rights and their views are also considered in decision making.I also resolve situations where students´ rights may have been violated </p>
            <p>Jan 2024 - Jan 2025</p>
            </div>
            
            <div className="job">
            <p><strong>Material Handler </strong> <i> Valtra Inc.</i></p>
            <p>Transportation and preparation of material for the production line of the tractor factory. Mainly manual work, part-time required forklift driving. The reason for the end of the employment relationship was starting to serve in the army. </p>
            <p>Sep 2020 - Dec 2020</p>
            </div>

          </section>
    
          <section className="skills">
            <h2>EDUCATION</h2>
            <p>UNIVERSITY OF JYVÄSKYLÄ, Information and Software Engineering (M.Sc.)</p>
            <ul>
               <li>Major: Information Technology</li> 
               <li>Minor: Business Studies</li>
            </ul>
            <p>2022 - Present</p>
          </section>
    
          <section className="skills">
            <h2>OTHER SKILLS</h2>
            <ul className="other-skills">
                <li>Microsoft 365 - services</li>
                <li>Operating systems:
                    <ul>
                        <li>MacOS</li>
                        <li>Windows</li>
                    </ul>
                </li>
                <li>Version control:
                    <ul>
                        <li>Github & Git</li>
                    </ul>
                </li>
                <li>Networking:
                    <ul>
                        <li>VPN & SSH</li>
                    </ul>  
                </li>  
                <li>Project management
                    <ul>
                        <li> Agile & Scrum </li>
                        <li> Trello </li>
                    </ul>
                </li>
            </ul>

          </section>
        </div>
      )
}

export default Resume
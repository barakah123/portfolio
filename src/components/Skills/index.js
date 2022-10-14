import React from "react"
import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact, faHtml5, faCss3, faJs, faGitAlt, faSass} from '@fortawesome/free-brands-svg-icons'

const Skills =()=> {
    return (
      
        <div className="container skills-page">
          <div className="">
    
            <div className="icon1 tc dib br2 pa2 ma3 grow bw2 shadow-5">
              <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
            </div>
            <div className="icon2 tc dib br2 pa2 ma3 grow bw2 shadow-5">
              <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
            </div>
            <div className="icon3 tc dib br2 pa2 ma3 grow bw2 shadow-5">
              <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
            </div>
            <div className="icon4 tc dib br2 pa2 ma3 grow bw2 shadow-5">
              <FontAwesomeIcon icon={faJs} color='EFD81D'/>
            </div>
            <div className="icon5 tc dib br2 pa2 ma3 grow bw2 shadow-5">
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
            </div>
            <div className="icon6 dib br2 pa2 ma3 grow bw2 shadow-5">
              <FontAwesomeIcon icon={faSass} />
            </div>
            </div>
            
        </div>
    );
}

export default Skills;

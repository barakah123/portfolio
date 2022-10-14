import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faCode, faEnvelope, faGears} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Header = () => {
  return (
    <div className='nav_bar'>
        <nav>
            <NavLink className="home" to="/"><FontAwesomeIcon icon={faHome}/></NavLink>
            <NavLink className="proj" to="/projects"><FontAwesomeIcon icon={faCode}/></NavLink>
            <NavLink className="skill"to="skills/"><FontAwesomeIcon icon={faGears}/></NavLink>
            <NavLink className="cont" to="/contact"><FontAwesomeIcon icon={faEnvelope}/></NavLink>
            <span className='vertical_line'>
              <a href='http://www.linkedin.com/'><FontAwesomeIcon icon={faLinkedin}/></a>
              <a href='http://'><FontAwesomeIcon icon={faGithub}/></a>
            </span>
        </nav>
    </div>
  )
}

export default Header;
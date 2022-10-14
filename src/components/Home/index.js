import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
  return (
    <div className='container homepage'>
    <div className='text'>
    <h1 className='grow'>
        Hi, I'm Issa Barakat
        <br className='stack'/> Frontend Developer 
    </h1>
    <p className="tc text">I am a very ambitious frontend developer looking for a role /
        freelance opportunity to work on diverse project. I love to build interactive applications
        and responsive web design.
       
    </p>
    <Link to="/contact" className="btn">CONTACT ME</Link>
</div>
</div>
  )
}

export default Home;

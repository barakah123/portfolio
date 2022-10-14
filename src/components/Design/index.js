import { Outlet } from 'react-router-dom';
import Header from '../Header';
import './index.scss'


    const Design = () => {
      return (
        <div className='app'>
          <Header/>
          <div className='page'>
            <Outlet /> 
          </div>
            
          </div>
      )
    }
    
    export default Design;

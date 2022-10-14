import {Routes, Route} from 'react-router-dom'
import Design from './components/Design'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.scss'


 const App = () => {
    return (
        
        <Routes>
            <Route path= "/" element = {<Design/>}>
             <Route index element={<Home/>}/>
             <Route path="skills" element={<Skills/>}/>
             <Route path="contact" element={<Contact/>}/>
        </Route>
        </Routes>
    );
}

export default App;




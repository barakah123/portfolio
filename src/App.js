import {Routes, Route} from 'react-router-dom'
import Design from './components/Design'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.scss'



 const App = () => {
    return (
        
        <Routes>
            <Route path= "/" element = {<Design/>}>
             <Route index element={<Home/>}/>
             <Route path="skills" element={<Skills/>}/>
             <Route path="projects" element={<Projects/>}/>
             <Route path="contact" element={<Contact/>}/>
        </Route>
        </Routes>
    );
}

export default App;




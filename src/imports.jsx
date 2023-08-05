import portrait from './Constants/portrait.jpg'
import gmail from './Constants/NavBarIcons/gmail.png'
import linkedin from './Constants/NavBarIcons/linkedin.png'
import medium from './Constants/NavBarIcons/medium.png'
import phone from './Constants/NavBarIcons/phone.png'
import github from './Constants/NavBarIcons/github.png'

export {MEDIUM_API_LINK} from './Constants/API/Api'
export {RESUME_URL} from './Constants/API/Api'
export {EMAIL} from './Constants/API/Api'
export {PHONE} from './Constants/API/Api'
export {MEDIUM_PROFILE_URL} from './Constants/API/Api'
export {GITHUB_LINK} from './Constants/API/Api'



export  {portrait,gmail, linkedin, medium,github, phone};

export {default as axios} from 'axios';
export {default as HomePage} from "./Components/HomePage/HomePage";
export {React} from "react";
export {BrowserRouter as Router, Routes, Route} from "react-router-dom"
export {default as Navbar} from "./Components/Navbar/Navbar";
export {Download} from 'react-bootstrap-icons'
export {default as SkillCard} from "./Components/SkillCard/SkillCard";
export {default as ProjectCard} from "./Components/ProjectCard/ProjectCard";
export { fetchMediumArticles } from './Components/HomePage/Functions';
export {default as ArticlesCard} from './Components/ArticlesCard/ArticlesCard';

// import portrait from './Constants/portrait.jpg'
import gmail from './Constants/NavBarIcons/gmail.png'
import linkedin from './Constants/NavBarIcons/linkedin.png'
import medium from './Constants/NavBarIcons/medium.png'
import phone from './Constants/NavBarIcons/phone.png'
import github from './Constants/NavBarIcons/github.png'
const portrait = "https://lh3.googleusercontent.com/fife/AKsag4NqL8mJeerA6fBIyiRIith3odlA4IjW3ZScXi8WGw3nhsDEdNbn5tON5no7Ixe5F8Wt6hi5dTcwCRwEymbZfuAHn111uze58hJzd8A49MxJyAKBNZ46wnOmbNBkl0oEphrNjUU52KZBfRwqtJ4pGJWaocbf5f4U7GFwWF9aZ1jm0pZmEiQtwXIwMUHv67HgKl2VP4ih40hve4aJPogXLXgqAi5zJFpTnI3mRJxNqvz4hKexZ8D4yj1ZBMQObESIG0sDTIpklSeFQ0cTMvbEw89ci1FwlLL67q8tUZ5SdJ2r7dLCMP3fRD7_zU-GGFmjij175PY4bHsOHWKhjuFbKMf6nwSHZZCrngF6UXWMirNhoNiO0QndGCqlOgl4RKXwu9wcfEeqVqzpnNOeJ1P4wTMPfEEZU8ArtrfM35KP4xBDcLP2otbck5KiMDGkjY6VInaYiw_5NV2DX3OE3E8rYuCWP1ovcQFZze6Dm1b4MRVkDzPAKLxSzeKF6iHrIPvJexJbkyTbO8pu5KJX0LAz62xeZHn3j5Q4Gnrmpt_-2gB9NsRl2ABq_g12iUv11wb_wBlJfFQViR9kBLC_jsYIx4-Gb8NxlZNd8Igj2TsbEIv7lWdqnOJNCS2b6onEF2pKPTotbYUw0Pk3t2TQEMC-9aPFKNshvgWDjqRWHQW-Bhaw2N-ae3Z6XSzpKLCoVNUjmn-TjEG827ZM3n9z7OMTgaUwyhZAmiYlMMcck09fYBWqjIqz08PwRvxR7FZpl7PUQ5NWXOP1DfAC-b6ictZ9F7zop99od6BcVGv7d8GUYswAGoQFrW8AL0MGTOIN4SQUZ5_qqi5cdwvTtOIEWvdgT690VtR26YlcfYZq2VfNO2d68Fl0jkUrpQHtV585U-LaMA-GWurbppS_oSLN44Yykg7Fv2D-r9YRgj0STiE195sp7HnfggbwjeW9warZxWTphdbPMU93vob8zKa5Up_DtdQdE0lGu7oMQ2NJsIgUqV_xzwldf_gAADCEtRIdB9cZwEgFYVUXz9tVaCHmTxPYsSN42q8KHQBGlupJ1ebX2A7-FtDQXCd1DvRXqjsBj7YRkKj2g9N7jn-s1Z-N8mAV26oxiR5VyfI5LnDB-ShLGLUUfOGitdKzLZ7OP-rYlHCn5CFG_c3I-q_cGA9x_SqXA8gzHUAAI7bn8UHATjgAuJg5z-S9HfWRzpAlkxQ2BrBxf9VCXEe9JM3Gilz8ZJuMaXG6y76LqHhGELuQ7bYFmfFjSs912Q-0hLw_4_eCk_08AbOpm9u0rhEMJ6rTunlrvbMyhTmUo5qEPEnyz6nTHp34Ob2sdyY2S3wK9zx_WAuWyTmXrJZldVR7piPWl_IRKMw2R0W90GEtMvyYdVmzto8StTqlDgKYPBMulA6dANvg2qIdQNL7L0IsB-w5zENQd9MCUCME6W91V7K0Wrdxbq8RUwrsFcoHJf6hqHG6btYUVPrcKWFJ3UNif3cY-bSGWul3tFBbEZ7yMV00xYMTzhSZKWHr9J1vRNDUJt6i1dUDFnnYgKnL=w1920-h492"

export {MEDIUM_API_LINK} from './Constants/API/Api'
export {RESUME_URL} from './Constants/API/Api'
export {EMAIL} from './Constants/API/Api'
export {PHONE} from './Constants/API/Api'
export {MEDIUM_PROFILE_URL} from './Constants/API/Api'
export {GITHUB_LINK} from './Constants/API/Api'
export {LINKEDIN_LINK} from './Constants/API/Api'


export  {portrait,gmail, linkedin, medium,github, phone};

export {default as axios} from 'axios';
export {default as HomePage} from "./Components/HomePage/HomePage";
export {BrowserRouter as Router, Routes, Route} from "react-router-dom"
export {default as Navbar} from "./Components/Navbar/Navbar";
export {Download} from 'react-bootstrap-icons'
export {default as SkillCard} from "./Components/SkillCard/SkillCard";
export {default as ProjectCard} from "./Components/ProjectCard/ProjectCard";
export { fetchMediumArticles } from './Components/HomePage/Functions';
export {default as ArticlesCard} from './Components/ArticlesCard/ArticlesCard';

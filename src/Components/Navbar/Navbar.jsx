import "./Navbar.css";
import {
  gmail,
  github,
  linkedin,
  medium,
  phone,
  home,
  MEDIUM_PROFILE_URL,
  PHONE,
  EMAIL,
  GITHUB_LINK,
  LINKEDIN_LINK,
  useNavigate,

} from "../../imports";
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="navbar_container ">
      <div className="navbar_link_wrapper">
      <div className="navbar_link"
        onClick={() => navigate("/")}
        >
          <img src={home} alt="" />
          <span>Home</span>
        </div>

        <div className="navbar_link"
        onClick={() => window.open(LINKEDIN_LINK, "_blank")}
        >
          <img src={linkedin} alt="" />
          <span>Linkedin</span>
        </div>
        <div
          onClick={() => (window.location.href = `mailto:${EMAIL}`)}
          className="navbar_link"
        >
          <img src={gmail} alt="" />
          <span>Gmail</span>
        </div>
        <div
          onClick={() => (window.location.href = `tel:${PHONE}`)}
          className="navbar_link"
        >
          <img src={phone} alt="" />
          <span>Phone</span>
        </div>
        <div
          onClick={() => window.open(MEDIUM_PROFILE_URL, "_blank")}
          className="navbar_link"
        >
          <img src={medium} alt="" />
          <span>Medium</span>
        </div>
        <div
          onClick={() => window.open(GITHUB_LINK, "_blank")}
          className="navbar_link"
        >
          <img src={github} alt="" />
          <span>GitHub</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

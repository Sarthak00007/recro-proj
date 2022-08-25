import logoSvg from '../../assets/logo.svg'

import './style.css'

const Header = () => {
    return (
      <div className="header-container">
        <div className="nav-bar-container">
            <div className="header-logo-container">
            <object data={logoSvg} type="image/svg+xml"></object>
            </div>
            <div className="header-button-container">
                <a title="Hire With Us" className="secondaryBtn nav-link">Hire with us</a>
                <a title="Contact Us" className="primaryBtn nav-link">Contact Us</a>
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import YatisLogo from '../../assets/Hear From Our Clients/lPcgAFu.png'
import GrabbIt from '../../assets/Hear From Our Clients/imageedit_2_9900261719.png'
import HomelaneLogo from '../../assets/Hear From Our Clients/Homelane Logo.png'
import PlayoLogo from '../../assets/Hear From Our Clients/Playo Logo.png'

import "./style.css";

const HearFromClient = () => {
  return (
    <div className="hear-from-client-main-container">
      <div className="hear-from-client-main-content">
        <div className="hear-from-client-title">
          Hear From <span className="text-gradiant">Our Clients</span> 
        </div>
        <div className="hear-from-client-box-container">
          <div className="hear-from-client-box">
            <div className='layout-two-logo'>
                <img className='layout-two-logo-img' src={HomelaneLogo}/>
            </div>
            <div className="hear-from-client-box-icon">
              <FontAwesomeIcon icon={faQuoteLeft}/>
              </div>
            <div className="hear-from-client-box-text">
              Recro does preliminary tests and evaluations before passing on a 
              filtered list of candidates for our assessment, and therefore we 
              get a pre-qualified list of candidates who are more likely to clear our interviews
            </div>
          </div>
          <div className="hear-from-client-box">
            <div className='layout-two-logo'>
                <img className='layout-two-logo-img' src={YatisLogo}/>
            </div>
            <div className="hear-from-client-box-icon">
              <FontAwesomeIcon icon={faQuoteLeft}/>
              </div>
            <div className="hear-from-client-box-text">
              We are happy to be working with Recro because of their commitment and technical expertise
            </div>
          </div>
          <div className="hear-from-client-box">
            <div className='layout-two-logo'>
                <img className='layout-two-logo-img' src={GrabbIt}/>
            </div>
            <div className="hear-from-client-box-icon">
              <FontAwesomeIcon icon={faQuoteLeft}/>
              </div>
            <div className="hear-from-client-box-text">
              We got a vetted team of high-quality developers in a short-term span. The guys hired could push the code to production from day one and helped us in taking the app to YC real quick
            </div>
          </div>
          <div className="hear-from-client-box">
            <div className='layout-two-logo'>
                <img className='layout-two-logo-img' src={PlayoLogo}/>
            </div>
            <div className="hear-from-client-box-icon">
              <FontAwesomeIcon icon={faQuoteLeft}/>
              </div>
            <div className="hear-from-client-box-text">
              We’ve been blown away by the level of the engineers we were able to contact through Recro
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HearFromClient;

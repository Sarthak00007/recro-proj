import AnshikaNegi from '../../assets/Quality Developers/Anshika-Negi.png'
import GouravPandey from '../../assets/Quality Developers/Gourav-Pandey.png'
import DeepeshJain from '../../assets/Quality Developers/Deepesh-Jain.png'
import AkhilReddy from '../../assets/Quality Developers/Akhil-Reddy.png'
import HarshithM from '../../assets/Quality Developers/Harshith-M.png'
import SubranilSaha from '../../assets/Quality Developers/Subranil-Saha.png'
import SanjanaS from '../../assets/Quality Developers/Sanjana-S.png'

import './style.css'

const LayoutNine = () => {
    return (
      <div className="layout-nine-container" >
        <div>
            <div className="developers-text-title-container">
                <span className="text-gradiant">Quality Developers</span> Who Start Building From Day 1
            </div>
            <div className="box-container">
                <div className="box">
                    <div className="box-img-container">
                        <img className="box-img" src={AnshikaNegi}/>
                    </div>
                    <div className="box-text-container">
                        <span className="text-gradiant">Anshika Negi</span><br/>
                        <div className="developer-description">Experience - 4+ Yrs</div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-img-container">
                        <img className="box-img" src={GouravPandey}/>
                    </div>
                    <div className="box-text-container">
                        <span className="text-gradiant">Gourav Pandey</span><br/>
                        <div className="developer-description">Experience - 4+ Yrs</div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-img-container">
                        <img className="box-img" src={DeepeshJain}/>
                    </div>
                    <div className="box-text-container">
                        <span className="text-gradiant">Deepesh Jain</span><br/>
                        <div className="developer-description">Experience - 6+ Yrs</div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-img-container">
                        <img className="box-img" src={AkhilReddy}/>
                    </div>
                    <div className="box-text-container">
                        <span className="text-gradiant">Akhil Reddy</span><br/>
                        <div className="developer-description">Experience - 3+ Yrs</div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-img-container">
                        <img className="box-img" src={HarshithM}/>
                    </div>
                    <div className="box-text-container">
                        <span className="text-gradiant">Harshith M</span><br/>
                        <div className="developer-description">Experience - 4+ Yrs</div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-img-container">
                        <img className="box-img" src={SubranilSaha}/>
                    </div>
                    <div className="box-text-container">
                        <span className="text-gradiant">Subranil Saha</span><br/>
                        <div className="developer-description">Experience - 3+ Yrs</div>
                    </div>
                </div>
                <div className="box">
                    <div className="box-img-container">
                        <img className="box-img" src={SanjanaS}/>
                    </div>
                    <div className="box-text-container">
                        <span className="text-gradiant">Sanjana S</span><br/>
                        <div className="developer-description">Experience - 6+ Yrs</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default LayoutNine;
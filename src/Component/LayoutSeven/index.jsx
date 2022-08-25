import iconOne from '../../assets/icon/V2jUM1c.png'
import iconTwo from '../../assets/icon/WnCGguz.png'
import iconThree from '../../assets/icon/gOScRoP.png'
import iconFour from '../../assets/icon/H0LyF1d.png'
import iconFive from '../../assets/icon/iVpqE8z.png'
import iconSix from '../../assets/icon/NzAO3jD.png'

import "./style.css";

const LayoutSeven = () => {
  return (
    <div className="layout-seven-main-container">
      <div className="layout-seven-content">
        <div className="layout-seven-title">
          What are we solving for <span className="text-gradiant">Clients</span>?
        </div>
        <div className="layout-seven-card mt-60">
            <div className="layout-seven-card-container">
              <div className="layout-seven-card-layout">
                <div className="layout-seven-card-content">
                  <div className="layout-seven-card-icon-container">
                    <img className="layout-seven-card-icon mt-30 mr-80" src={iconOne} />
                  </div>
                  <div className="mt-30 ml-40">
                    <div className="layout-seven-card-title">
                      On-Demand, On Time
                    </div>
                    <div className="layout-seven-card-description mr-100 mt-20">
                      We connect startups to high-performing talented engineers who can start solving your problems immediately.
                    </div>
                  </div>
                </div>
              </div>
              <div className="layout-seven-card-layout">
                <div className="layout-seven-card-content">
                    <div className="layout-seven-card-icon-container">
                    <img className="layout-seven-card-icon mt-30 mr-80" src={iconTwo} />
                    </div>
                      <div className="mt-30 ml-40">
                        <div className="layout-seven-card-title">
                          Fit To Scale
                        </div>
                        <div className="layout-seven-card-description mr-100 mt-20">
                        Expand your team with quality talent that understands the need of the hour and hire only when the need arises.
                        </div>
                      </div>
                  </div>
                </div>
              <div className="layout-seven-card-layout">
              <div className="layout-seven-card-content">
                  <div className="layout-seven-card-icon-container">
                  <img className="layout-seven-card-icon mt-30 mr-80" src={iconThree} />
                  </div>
                  <div className="mt-30 ml-40">
                        <div className="layout-seven-card-title">
                          Productive Day 1
                        </div>
                        <div className="layout-seven-card-description mr-100 mt-20">
                          Talent with 0 learning curve and no training cost
                        </div>
                      </div>
                </div>
              </div>
            </div>
            <div className="layout-seven-card-container mt-30">
              <div className="layout-seven-card-layout">
              <div className="layout-seven-card-content">
                  <div className="layout-seven-card-icon-container">
                    <img className="layout-seven-card-icon mt-30 mr-80" src={iconFour} />
                  </div>
                  <div className="mt-30 ml-40">
                        <div className="layout-seven-card-title">
                          Top Draw Talent
                        </div>
                        <div className="layout-seven-card-description mr-100 mt-20">
                        We promise a 1.36% selection ratio with a highly competitive process, backed by feedback transparency and a comprehensive scorecard.
                        </div>
                      </div>
                </div>
              </div>
              <div className="layout-seven-card-layout">
              <div className="layout-seven-card-content">
                  <div className="layout-seven-card-icon-container">
                  <img className="layout-seven-card-icon mt-30 mr-80" src={iconFive} />
                  </div>
                  <div className="mt-30 ml-40">
                        <div className="layout-seven-card-title">
                          Time To Hire
                        </div>
                        <div className="layout-seven-card-description mr-100 mt-20">
                        Efficient hiring with 0 assessment time and quick onboarding
                        </div>
                      </div>
                </div>
              </div>
              <div className="layout-seven-card-layout">
              <div className="layout-seven-card-content">
                  <div className="layout-seven-card-icon-container">
                  <img className="layout-seven-card-icon mt-30 mr-80" src={iconSix} />
                  </div>
                  <div className="mt-30 ml-40">
                        <div className="layout-seven-card-title">
                          Compliance/HR
                        </div>
                        <div className="layout-seven-card-description mr-100 mt-20">
                          Freedom from statutory hassles and compliance related overheads
                        </div>
                      </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutSeven;

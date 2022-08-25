import iconOne from '../../assets/icon/jnFAsXG.png'
import iconTwo from '../../assets/icon/Flvauug.png'
import iconThree from '../../assets/icon/i8uAvGY.png'
import iconFour from '../../assets/icon/7aTEV63.png'

// jnFAsXG.png
// Flvauug.png
// i8uAvGY.png
// 7aTEV63.png

import "./style.css";

const LayoutSix = () => {
  return (
    <div className="layout-six-main-container">
      <div className="layout-six-content">
        <div className="num-tiles-layout-six">
          <div className="mt-60 ta-center">
            <img className="num-tiles-layout-six-icon" src={iconOne} />
          </div>
          <div className="ta-center">
            <div className="text-gradiant num-tiles-layout-six-text">300%</div>
            <div className="num-tiles-layout-six-text-desc">Rockstars <br /> Deployed</div>
          </div>
        </div>
        <div className="num-tiles-layout-six">
        <div className="mt-60 ta-center">
            <img className="num-tiles-layout-six-icon" src={iconTwo} />
          </div>
          <div className="ta-center">
            <div className="text-gradiant num-tiles-layout-six-text">150+</div>
            <div className="num-tiles-layout-six-text-desc">Startup <br /> Served</div>
          </div>
        </div>
        <div className="num-tiles-layout-six gradiant-background">
          <div className="mt-60 ta-center">
              <img className="num-tiles-layout-six-icon" src={iconThree} />
          </div>
          <div className="ta-center">
            <div className="num-tiles-layout-six-text">72.3%</div>
            <div className="num-tiles-layout-six-text-desc">Client <br /> Retention</div>
          </div>
        </div>
        <div className="num-tiles-layout-six">
        <div className="mt-60 ta-center">
          <img className="num-tiles-layout-six-icon" src={iconFour} />
          </div>
          <div className="ta-center">
            <div className="text-gradiant num-tiles-layout-six-text">50,000+</div>
            <div className="num-tiles-layout-six-text-desc">Engineering <br /> Hour Saved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutSix;

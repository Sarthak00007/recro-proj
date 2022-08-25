import CeoJpeg from "../../assets/teamMember/Ceo.jpeg";
import CPOJpeg from "../../assets/teamMember/CPO.jpeg";
import HOCJpeg from "../../assets/teamMember/HOC.png";
import rmgHead from "../../assets/teamMember/rmgHead.png";

import "./style.css";

const LayoutFive = () => {
  return (
    <div className="layout-five-main-container">
      <div className="layout-one-content-form-text layout-two-content-form-title">
        Meet The People Who Choose{" "}
        <span className="text-gradiant ml-5"> Recro’s Best</span>
      </div>
      <div className="team-member-container">
        <div className="team-member-intro-container">
          <div>
            <div className="team-member-img-container">
              <img className="team-member-img" src={CeoJpeg} />
            </div>
            <div className="name-title-intro-team">Shubham Rastogi</div>
            <div className="color-grey position-title-intro-team">
              Founder & CEO
            </div>
            <p className="para-intro-team color-grey">
              Has helped in expansion of multiple organizations with high
              quality talent and technology for more than 10+ years.
            </p>
          </div>

          <div>
            <div className="team-member-img-container">
              <img className="team-member-img" src={CPOJpeg} />
            </div>
            <div className="name-title-intro-team">Shubham Rastogi</div>
            <div className="color-grey position-title-intro-team">
              Founder & CEO
            </div>
            <p className="para-intro-team color-grey">
              With over 8+ years experience of working with Samsung, Mercedes,
              we understands what matters the most in team building.
            </p>
          </div>

          <div>
            <div className="team-member-img-container">
              <img className="team-member-img" src={rmgHead} />
            </div>
            <div className="name-title-intro-team">Shubham Rastogi</div>
            <div className="color-grey position-title-intro-team">
              Founder & CEO
            </div>
            <p className="para-intro-team color-grey">
              Building strong strategic partnerships globally for the last 5
              years for high growth companies.
            </p>
          </div>

          <div>
            <div className="team-member-img-container">
              <img className="team-member-img" src={HOCJpeg} />
            </div>
            <div className="name-title-intro-team">Shubham Rastogi</div>
            <div className="color-grey position-title-intro-team">
              Founder & CEO
            </div>
            <p className="para-intro-team color-grey">
              Has been responsible to building an empowering culture with IT
              giants for last 6+ years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutFive;

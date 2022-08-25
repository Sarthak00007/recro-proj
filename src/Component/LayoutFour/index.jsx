import imageStructure from '../../assets/imageStructure.png'
import "./style.css";

const LayoutFour = () => {
  return (
    <div className="layout-four-main-container">
      <div className="layout-one-content-form-text layout-two-content-form-title title-text">
        We don’t find codes that fit.<br/>
        <span className="text-gradiant">We find brilliant minds who do.</span>
      </div>
      <div className="description-text">Find the right talent that fits you in just 15 DAYS.</div>
      <div className='layout-four-image-container'>
        <img className='layout-four-image' src={imageStructure} />
      </div>
    </div>
  );
};

export default LayoutFour;

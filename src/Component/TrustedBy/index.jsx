import Propertyguru from '../../assets/We are trusted by/Propertyguru.png'
import Flipkart from '../../assets/We are trusted by/Flipkart-Logo.wine.png'
import HappyfreshLogo from '../../assets/We are trusted by/Happyfresh logo.png'
import Ninjavan from '../../assets/We are trusted by/Ninjavan.png'
import foodMartHub from '../../assets/We are trusted by/foodMartHub.png'

import './style.css'

const LayoutTwo = () => {
    return (
      <div className="layout-two-container">
        <section className="layout-two-container-bg">
            <div className='layout-two-title-container'>
                <div className='layout-one-content-form-text layout-two-content-form-title'>Trusted By</div>
            </div>
            <div className='layout-two-logo-container'>
                <div className='layout-two-logo'>
                    <img className='layout-two-logo-img' src={Ninjavan}/>
                </div>
                <div className='layout-two-logo'>
                    <img className='layout-two-logo-img' src={HappyfreshLogo}/>
                </div>
                <div className='layout-two-logo'>
                    <img className='layout-two-logo-img' src={Propertyguru}/>
                </div>
                <div className='layout-two-logo'>
                    <img className='layout-two-logo-img flip-cart' src={Flipkart}/>
                </div>
                <div className='layout-two-logo'>
                    <img className='layout-two-logo-img' src={foodMartHub}/>
                </div>
            </div>
        </section>
      </div>
    );
  }
  
  export default LayoutTwo;
import './style.css'

const LayoutOne = () => {
    return (
      <div className="layout-one-container" >
        <div className="p-0 container-fluid">
            <section className="layout-one-content">
                <div className="layout-one-image-container">
                    <div className="layout-one-content-container">
                        <div className="layout-one-content-text-container" >
                            <div className='layout-one-content-text'>
                                Your Hunt For Top
                                <div className="layout-one-content-color-red">
                                React Developer
                                </div>
                                Ends Here
                                <p className='layout-one-content-text-p'>
                                    Recro is where some of the fastest-growing startups <br/>
                                    find the right talent, on-demand
                                </p>
                            </div>
                        </div>
                        <div className="layout-one-content-form-container">
                            <div className="layout-one-content-form">
                                <div className='layout-one-content-form-text'>Hire With Us</div>
                                <div className='layout-one-content-form-form'>
                                    <form className='layout-one-form'>
                                        <input className='layout-one-input' placeholder='Full Name' />
                                        <input className='layout-one-input' placeholder='Country' />
                                        <input className='layout-one-input' placeholder='Contact Number' />
                                        <input className='layout-one-input' placeholder='Name Of Your Organization' />
                                        <input className='layout-one-input' placeholder='Designation' />
                                        <input className='layout-one-input' placeholder='Buisness Email Id' />
                                    </form>
                                </div>
                                <div className='layout-one-content-form-button'>
                                <a title="Contact Us" className="primaryBtn nav-link">Book a Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
    );
  }
  
  export default LayoutOne;
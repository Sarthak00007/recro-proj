import logoOne from '../../assets/icon/kP5Akt7.png'
import './style.css'

const BookDemo = () => {
    return(
    <div className="book-demo-container">
        <div className="book-demo-content">
            <div className="book-demo-content-logo">
                <img src={logoOne} />
            </div>
            <div className="book-demo-text">
                Don’t hunt for top Remote Engineering talent. <br /> Just hire them.
            </div>
            <div className="book-demo-button-container">
                <a className="book-demo-button"> <span className="primaryBtn nav-link">Book a Demo</span></a>
            </div>
        </div>
    </div>
    )
}

export default BookDemo
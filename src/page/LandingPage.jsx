import Header from '../Component/Header'
import LayoutOne from '../Component/LayoutOne'
import TrustedBy from '../Component/TrustedBy';
import LayoutThree from '../Component/LayoutThree';
import LayoutFour from '../Component/LayoutFour';
// import LayoutFive from '../Component/LayoutFive';
import LayoutSix from '../Component/LayoutSix';
import LayoutSeven from '../Component/LayoutSeven';
import LayoutNinth from '../Component/LayoutNinth';
import CopyRight from '../Component/CopyRight';
import BookDemo from '../Component/BookDemo';
import BookDemoTwo from '../Component/BookDemoTwo';
import HearFromClient from '../Component/HearFromClient';


const LandingPage = () => {
    return (
      <>
        <Header />
        <LayoutOne />
        <TrustedBy />
        <LayoutThree />
        <LayoutFour />
        {/* <LayoutFive /> */}
        <BookDemo /> 
        <LayoutSix />
        <LayoutSeven />
        <HearFromClient />
        <LayoutNinth />
        <BookDemoTwo />
        <CopyRight/>
      </>
    );
  }
  
  export default LandingPage;
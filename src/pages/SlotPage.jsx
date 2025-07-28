import React, {useEffect} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slot from "../components/Slot";
import Results from "../components/Results";
import SideBar from "../components/SideBar";
import MobileWidget from "../components/MobileWidget";

const SlotPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      {/*<Header/>*/}
      {/*<SideBar/>*/}
      <div className="slotsPage">
        <main className='main main--slots'>
          <div className="container">
            <Slot/>
            <Results/>
          </div>
        </main>
      </div>
      {/*<Footer/>*/}
      {/*<MobileWidget/>*/}
    </>
  )
    ;
};

export default SlotPage;
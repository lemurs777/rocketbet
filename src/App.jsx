import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import SlotsPage from "./pages/SlotsPage";
import BlackJackPage from "./pages/BlackJackPage";
import TablePage from "./pages/TablePage";
import JackpotPage from "./pages/JackpotPage";
import LiveCasino from "./pages/LiveCasino";
import PokerPage from "./pages/PokerPage";
import Home from "./pages/Home";
import PromoPage from "./pages/PromoPage";
import Faq from "./pages/Faq";
import PrivacyPage from "./pages/PrivacyPage";
import {useEffect, useState} from "react";
import TermsPage from "./pages/TermsPage";
import ResponsiblePage from "./pages/ResponsiblePage";
import AboutPage from "./pages/AboutPage";
import AffiliatePage from "./pages/AffiliatePage";
import ContactPage from "./pages/ContactPage";
import Modal from "./components/Modal";
import Account from "./pages/Account";
import AccountGeneralPage from "./pages/AccountGeneralPage";
import AccountSecurityPage from "./pages/AccountSecurityPage";
import AccountVerificationPage from "./pages/AccountVerificationPage";
import SlotPage from "./pages/SlotPage";
import SlotP from "./pages/SlotP";
import CrashPage from './pages/CrashPage'


function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index path="/" element={<HomePage/>}/>
          <Route path='/slots' element={<SlotsPage/>}/>
          <Route path='/blackjack' element={<BlackJackPage/>}/>
          <Route path='/table' element={<TablePage/>}/>
          <Route path='/jackpot' element={<JackpotPage/>}/>
          <Route path='/crash' element={<CrashPage/>}/>
          <Route path='/casino' element={<LiveCasino/>}/>
          <Route path='/poker' element={<PokerPage/>}/>
          <Route path='/promo' element={<PromoPage/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/privacy' element={<PrivacyPage/>}/>
          <Route path='/terms' element={<TermsPage/>}/>
          <Route path='/responsible' element={<ResponsiblePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/affiliate' element={<AffiliatePage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path="/slot" element={<SlotPage/>}/>
        </Route>
        <Route path='account' element={<Account/>}>
          <Route path="general" element={<AccountGeneralPage/>}/>
          <Route path="security" element={<AccountSecurityPage/>}/>
          <Route path="verification" element={<AccountVerificationPage/>}/>
        </Route>


      </Routes>

    </div>
  );
}

export default App;

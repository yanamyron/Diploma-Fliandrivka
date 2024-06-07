import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Theme";


import Navigation from './components/Navigation';
import Home from  './components/sections/Home';
import AboutUs from './components/sections/AboutUs';
import Reviews from "./components/Reviews";
import FAQ from './components/sections/FAQ';
import Footer  from './components/Footer';
import Cards from './components/Cards';
import Catalog from "./pages/Catalog";
import Homepage from "./pages/Homepage";
import MainEnrole from './components/forms/MainEnrole';
import GoncharstvoGroup from './components/forms/GoncharstvoGroup';
import Dashboard from "./front/components/Dashboard";
import Login from "./front/components/Login";
import Register from "./front/components/Register";
import Goncharstvoindividual from './components/forms/Goncharstvoindividual';
import GoncharstvoSplit from './components/forms/GoncharstvoSplit';
import LipkaGroup from "./components/forms/LipkaGroup";
import LipkaIndividual from "./components/forms/LipkaIndividual";
import LipkaSplit from "./components/forms/LipkaSplit";
import SertificateGoncharstvo from "./components/forms/SertificateGoncharstvo";
import SertificateLipka from "./components/forms/SertificateLipka";
import Masterclass1 from "./components/forms/Masterclass1";
import Masterclass2 from "./components/forms/Masterclass2";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <GlobalStyles >
      <ThemeProvider theme ={light}>

      <Navigation />
      <Home />
      <AboutUs />
      <Cards/>
      <Reviews />
      <FAQ />
      <Footer />

      </ThemeProvider>
      </GlobalStyles>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register4915" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mainEnrole" element={<MainEnrole />} />
        <Route path="/goncharstvogroup" element={<GoncharstvoGroup />} />
        <Route path="/goncharstvoindividual" element={<Goncharstvoindividual />} />
        <Route path="/goncharstvosplit" element={<GoncharstvoSplit />} />
        <Route path="/lipkagroup" element={<LipkaGroup />} />
        <Route path="/lipkaindividual" element={<LipkaIndividual />} />
        <Route path="/lipkasplit" element={<LipkaSplit />} />
        <Route path="/masterclass1" element={<Masterclass1 />} />
        <Route path="/masterclass2" element={<Masterclass2 />} />
        <Route path="/sertificategoncharstvo" element={<SertificateGoncharstvo />} />
        <Route path="/sertificatelipka" element={<SertificateLipka />} />
      </Routes>
      </>
  );
};

export default App;
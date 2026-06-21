import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";

// About
import SchoolTiming from "./components/pages/academics/SchoolTiming";
import PrincipalMessage from "./components/pages/about/PrincipalMessage";
import MissionVision from "./components/pages/about/MissionVision";
import OurTeam from "./components/pages/about/OurTeam";
import Hostel from "./components/pages/about/Hostel";

// Academics

import Classes from "./components/pages/academics/KG-VIII";
import Curriculum from "./components/pages/academics/Curriculum";
import Activities from "./components/pages/academics/Activities";

// Admission
import AdmissionProcess from "./components/pages/admission/AdmissionProcess";
import FeeStructure from "./components/pages/admission/FeeStructure";
import ApplyOnline from "./components/pages/admission/ApplyOnline";

// Achievements
import CBSEClassX from "./components/pages/achievements/CBSEClassX";
import Awards from "./components/pages/achievements/Awards";
import Alumni from "./components/pages/achievements/Alumni";

// Gallery
import SportsDay from "./components/pages/gallery/SportsDay";
import AnnualFunction from "./components/pages/gallery/AnnualFunction";

import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}

        <Route path="/about/principal-message" element={<PrincipalMessage />} />
        <Route path="/about/mission-vision" element={<MissionVision />} />
        <Route path="/about/our-team" element={<OurTeam />} />
        <Route path="/about/hostel-info" element={<Hostel />}/>

        {/* Academics */}
        <Route path="/academics/school-timing" element={<SchoolTiming />} />
        <Route path="/academics/KG-VIII" element={<Classes />} />
        <Route path="/academics/curriculum" element={<Curriculum />} />
        <Route path="/academics/activities" element={<Activities />} />

        {/* Admission */}
        <Route path="/admission/process" element={<AdmissionProcess />} />
        <Route path="/admission/fee-structure" element={<FeeStructure />} />
        <Route path="/admission/apply-online" element={<ApplyOnline />} />

        {/* Achievements */}
        <Route path="/achievements/cbse-class-x" element={<CBSEClassX />}/>
        <Route path="/achievements/awards" element={<Awards />} />
        <Route path="/achievements/alumni" element={<Alumni />} />

        {/* Gallery */}
        <Route path="/gallery/sports-day" element={<SportsDay />} />
        <Route path="/gallery/annual-function" element={<AnnualFunction />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
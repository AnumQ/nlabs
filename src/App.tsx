import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Components/footer/Links/PrivacyPolicy/PrivacyPolicy";
import HomePage from "./Components/home/HomePage";
import ContactUs from "./Components/contact/ContactUs";
import Terms from "./Components/footer/Links/Terms/Terms";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

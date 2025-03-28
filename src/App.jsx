import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductServices from "./pages/ProductServicesPage/ProductServicesPage";
import Promotions from "./pages/PromotionsPage/PromotionsPage";
import NewsEvents from "./pages/NewsEventsPage/NewsEventsPage";
import SafetyTipsPage from "./pages/SafetyTipsPage/SafetyTipsPage";
import FAQSPage from "./pages/FAQSPage/FAQSPage";
import LocationPage from "./pages/LocationPage/LocationPage";

function App() {

  return (
    <div className="flex flex-col md:mx-auto w-ful mx-4 md:w-4/5">
      <Router>
        <Header />
        <div className="my-2">
          <Routes>
            <Route path="/" element={<ProductServices />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/newsevents" element={<NewsEvents />} />
            <Route path="/safetytips" element={<SafetyTipsPage />} />
            <Route path="/faqs" element={<FAQSPage />} />
            <Route path="/location" element={<LocationPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App

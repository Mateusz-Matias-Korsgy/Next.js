import React from "react";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
// Routes
import Index from "./pages/Index";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import ErrorPageBreak from "./pages/ErrorPageBreak";
import Faq from "./pages/Faq";
import ForgetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
// SERVICES ROUTE
import BusinessServices from "./pages/services/BusinessServices";
import CommunicationServices from "./pages/services/CommunicationServices";
import MultimediaServices from "./pages/services/MultimediaServices";
import ProfessionalServices from "./pages/services/ProfessionalServices";

//PRICING ROUTES
import BusinessPricing from "./pages/pricing/Business";
import CommunicationPricing from "./pages/pricing/Communication";
import MultimediaPricing from "./pages/pricing/Multimedia";
import ProfessionalPricing from "./pages/pricing/Professional";

//PROFILE ROUTES
import Profile from "./pages/profile/Profile";
import ProfileDetails from "./pages/profile/ProfileDetails";

//PAYMENTS ROUTES
import ProcessOne from "./pages/payments/ProcessOne";
import ProcessTwo from "./pages/payments/ProcessTwo";
import ProcessThree from "./pages/payments/ProcessThree";

//LEARN MORE ROUTES
import BudgetFriendly from "./pages/learnmore/BudgetFriendly";
import OurCulture from "./pages/learnmore/OurCulture";
import Professionals from "./pages/learnmore/Professionals";

//CAREERS ROUTE
import CareerHome from "./pages/careers/index";
import Apply from "./pages/careers/Apply";

import { RouterProvider } from "react-router-dom/dist";
import CookiesPreferences from "./pages/policy/CookiesPreferences";
import PrivacyNotice from "./pages/policy/PrivacyNotice";
import TermsofServices from "./pages/policy/TermsofServices";
import Demo from "./pages/policy/Demo";
import Pricing from "./pages/pricing";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Index />} />
        <Route
          path="/contact-us"
          element={<ContactUs />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/about"
          element={<About />}
          errorElement={<ErrorPageBreak />}
        />

        <Route
          path="/login"
          element={<Login />}
          errorElement={<ErrorPageBreak />}
        />

        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route
          path="/forget-password"
          element={<ForgetPassword />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/signup"
          element={<Signup />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/change-password"
          element={<ChangePassword />}
          errorElement={<ErrorPageBreak />}
        />

        <Route
          path="/faq"
          element={<Faq />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/change-password"
          element={<ChangePassword />}
          errorElement={<ErrorPageBreak />}
        />
        {/* SERVICES ROUTES */}
        <Route
          path="/services/business"
          element={<BusinessServices />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/services/communication"
          element={<CommunicationServices />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/services/multimedia"
          element={<MultimediaServices />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/services/professional"
          element={<ProfessionalServices />}
          errorElement={<ErrorPageBreak />}
        />
        {/* PRICING */}
        <Route
          path="/pricing"
          element={<Pricing />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/pricing/business"
          element={<BusinessPricing />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/pricing/communication"
          element={<CommunicationPricing />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/pricing/multimedia"
          element={<MultimediaPricing />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/pricing/professional"
          element={<ProfessionalPricing />}
          errorElement={<ErrorPageBreak />}
        />
        {/* PROFILE */}
        <Route
          path="/profile"
          element={<Profile />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/profile/details"
          element={<ProfileDetails />}
          errorElement={<ErrorPageBreak />}
        />
        {/* PAYMENTS */}
        <Route
          path="/payments/order"
          element={<ProcessOne />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/payments/confirm"
          element={<ProcessTwo />}
        // errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/payments/success/:email"
          element={<ProcessThree />}
          errorElement={<ErrorPageBreak />}
        />
        {/* LEARNMORE */}

        <Route
          path="/learn-more/budget-friendly"
          element={<BudgetFriendly />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/learn-more/our-culture"
          element={<OurCulture />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/learn-more/we-are-professionals"
          element={<Professionals />}
          errorElement={<ErrorPageBreak />}
        />
        {/* CAREERS */}
        <Route
          path="/career"
          element={<CareerHome />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/career/apply/:id"
          element={<Apply />}
          errorElement={<ErrorPageBreak />}
        />

        {/* POLICY NOTICE */}
        <Route
          path="/policy/privacy-notice"
          element={<PrivacyNotice />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/policy/terms-of-service"
          element={<TermsofServices />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/policy/cookie-preferences"
          element={<CookiesPreferences />}
          errorElement={<ErrorPageBreak />}
        />
        <Route
          path="/policy/demo"
          element={<Demo />}
          errorElement={<ErrorPageBreak />}
        />
        {/* ERROR ELEMENT */}
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <div className="sticky top-0 bg-white z-50">
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

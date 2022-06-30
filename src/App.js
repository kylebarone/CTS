import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from "./contexts/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import ProtectedRoute from './components/shared/ProtectedRoute'
import ProfilePage from './components/pages/ProfilePage/ProfilePage'
import UpdateProfilePage from './components/pages/ProfilePage/UpdateProfilePage'
import HomePage from './components/pages/HomePage'
import LandingPage from './components/pages/LandingPage';
import FaqPage from './components/pages/FaqPage';
import ContactPage from './components/pages/ContactPage';
import LoginPage from './components/pages/LoginPage';
import ForgotPassword from './components/pages/ForgotPassword';
import SignUp from './components/pages/SignUpPage';
import NotFound from './components/pages/NotFound';
import Profile from './components/pages/ProfilePage/ProfileParent';

function App() {

  return (
      <Router>
        <AuthProvider>
          <div className="App">
            <div className="wrapper">
              <Navbar />
              <Routes>
                {/* Routes requiring users to be signed in*/}
                <Route element={<ProtectedRoute redirectPath="./login" />}>
                  <Route path="/profile" element={<><Profile /></>} >
                    <Route index element={<><ProfilePage /></>} />
                    <Route path="update-profile" element={<><UpdateProfilePage /></>} />
                  </Route>
                  <Route path="/home" element={<><HomePage /></>}></Route>
                </Route>

                <Route index element={<><LandingPage /></>}></Route>
                <Route path="/" element={<><LandingPage /></>}></Route>
                <Route path="/faq" element={<><FaqPage /></>}></Route>
                <Route path="/contact" element={<><ContactPage /></>}></Route>

                <Route path="/login" element={<><LoginPage /></>} />
                <Route path='/forgot-password' element={<><ForgotPassword /></>} />

                <Route path="/signup" element={<><SignUp /></>}></Route>
                <Route path="*" element={<><NotFound /></>} />

              </Routes>
              <Footer />

            </div>
          </div>
        </AuthProvider>
      </Router>
  );
}

export default App;

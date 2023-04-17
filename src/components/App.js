import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import NavBar from './NavBar';
import Footer from "./Footer"
import AuthContext from './authContext';
import Home from './Home';
import Contact from "./Contact"
import Login from "./Login"
import SignUp from "./SignUp"
import Welcome from "./Welcome"
import MerchantCategoryList from './MerchantCategoryList';
import Aboutus from './Aboutus';
import MerchantHealth from './MerchantHealth';
import MerchantBeauty from './MerchantBeauty';
import MerchantFood from './MerchantFood';
import MerchantDeco from './MerchantDeco';
import MerchantAnimal from './MerchantAnimal';
import MerchantTheater from './MerchantTheater';

import MerchantProfile from './MerchantProfile';
import EditProfileDetails from './EditProfileDetails';
import MerchantScheduleToken from './MerchantScheduleToken';

import MerchantList from './MerchantList';

import UserviewOfMerchant from './UserviewOfMerchant';
import Dashboard from './Dashboard';

import DemoDash from './DemoDash';

function App() {
  const [authKey, setAuthKey] = useState("");
  return (
    <AuthContext.Provider value={{ authKey, setAuthKey }}>
    <div className='App'>
    
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route exact path='/merchantcategorylist'>
            <MerchantCategoryList />
          </Route>
        
          <Route exact path='/welcome'>
            <Welcome />
          </Route>

          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/signup'>
            <SignUp  />
          </Route>

          <Route exact path='/aboutus'>
            <Aboutus />
          </Route> 

          <Route exact path='/contact'>
            <Contact />
          </Route>

          <Route exact path='/health'>
            <MerchantHealth />
          </Route>

          <Route exact path='/beauty'>
            <MerchantBeauty />
          </Route>

          <Route exact path='/food'>
            <MerchantFood />
          </Route>

          <Route exact path='/deco'>
            <MerchantDeco />
          </Route>

          <Route exact path='/animal'>
            <MerchantAnimal />
          </Route>

          <Route exact path='/theater'>
            <MerchantTheater />
          </Route>

          <Route exact path='/merchantprofile'>
            <MerchantProfile />
          </Route>

          <Route exact path='/edit-profile'>
            <EditProfileDetails />
          </Route>

          <Route exact path='/merchantscheduletoken'>
          <MerchantScheduleToken />
          </Route>

          <Route exact path='/dashboard'>
          <Dashboard />
          </Route>

          <Route exact path='/merchantList'>
          <MerchantList />
          </Route>

          <Route exact path='/userview'>
          <UserviewOfMerchant />
          </Route>

          <Route exact path='/demodash'>
          <DemoDash />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
      </div>
      </AuthContext.Provider>
);
}

export default App;

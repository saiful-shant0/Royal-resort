
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import AddServices from './Pages/AddServices/AddServices';

import LogIn from './Pages/LogIn/LogIn';
import NotFound from './Pages/NotFound.js/NotFound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Booking from './Pages/Bokking/Booking';
import MyBooking from './Pages/Mybooking/MyBooking';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/" >
              <Home></Home>
            </Route>
            <Route path="/home" >
              <Home></Home>
            </Route>
            <PrivateRoute path="/managebooking" >
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute path="/addservice" >
              <AddServices></AddServices>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId" >
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/mybooking" >
              <MyBooking></MyBooking>
            </PrivateRoute>

            <Route path="/login" >
              <LogIn></LogIn>
            </Route>
            <Route path="*" >
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

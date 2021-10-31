
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import AddServices from './Pages/AddServices/AddServices';
import MyBooking from './Pages/Mybookings/MyBooking';
import LogIn from './Pages/LogIn/LogIn';
import NotFound from './Pages/NotFound.js/NotFound';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div>
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
            <Route path="/managebooking" >
              <ManageBookings></ManageBookings>
            </Route>
            <Route path="/addservice" >
              <AddServices></AddServices>
            </Route>
            <Route path="/mybooking" >
              <MyBooking></MyBooking>
            </Route>
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

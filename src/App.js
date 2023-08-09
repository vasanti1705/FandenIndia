import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/loginsignup/Signup'
import Login from './components/loginsignup/Login'
import PastEventPage from './components/pastevent/events'
import Aboutus from './components/aboutus';
import Footer from './components/footer';
import VerticalMode from './components/carousel';
import Event from './components/events/Event';
import Review from './components/Review';
import PreviousNextMethods from './components/pastevent/pastevents';

//import MainContent from './components/article/MainContent';
import News from "./components/news/news";
import Sports from './components/sports';
import Pages from "./components/Store/Pages";
import Main from "./components/Store/Main";
import CartPage from "./components/Store/CartPage";


function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
      <Routes>
          <Route exact path='/' element={[
            <>
            
               
               <div style={{ marginTop:'80px', marginBottom: '50px' }}>
                <VerticalMode />
              </div>

              <div style={{ marginTop: '0px', marginBottom: '0px' }}>
                <Event />
              </div>
              <div style={{ marginTop: '0px', marginBottom: '0px' }}>
                <PreviousNextMethods />
              </div>
              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
              <Pages />
              </div>
              <div style={{ marginTop: '0px', marginBottom: '0px' }}>
              <News />
              </div>
              <div style={{ marginTop: '', marginBottom: '50px' }}>
                <Review />
              </div>
              
            </>         
          ]} />

            
         <Route exact path='/Main' element={<Main />}  />
        <Route path="/cart" component={<CartPage />} />
       <Route exact path = '/sports' element={<Sports />} />
        <Route exact path='/events' element={<PastEventPage />} />
        <Route exact path='/aboutus' element={<Aboutus />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      
      </Routes>
      <Footer /> 
    </BrowserRouter>
 

    </>

  );
}

export default App;

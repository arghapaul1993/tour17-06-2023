import './App.css';

// import Navabar from './Components/Navabar/Navabar';
// import Homepage from './Components/homepage/Homepage';
// import AllRoutes from './Components/AllRoutes/AllRoutes';
// import Coins from './Components/coins/Coins';
// import Footer from './Components/footer/Footer';
import Home from './component/home/Home';
import Navabar from './component/navabar/Navabar';
import Footer from './component/footer/Footer';
import Uttarakhand from './component/uttarakhand/Uttarakhand';
import Routesr from './component/Routes/Routesr';
import Carousel from './component/home/Carousel';
import { Provider } from 'react-redux';
import store from './component/home/Store';
function App() {
  return (
    
    <div className="App">
       <Provider store={store}>
    <Navabar/>
  
    {/* <Carousel/> */}
  
    <Routesr/>
    <br/>
    
    <Footer/>
    </Provider>
    </div>
  );
}

export default App;

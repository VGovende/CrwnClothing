import './App.css';

import Home from './routes/home/home.component'
import NavigationBar from './routes/navigation/navigation.component'
import Authentication from './routes/authentication /authentication.component'

import {Routes ,Route} from 'react-router-dom';



const Shop = () => {
  return <h1>I AM A SHOP</h1>;
};

const App = () => {
  return(
    <Routes>
      <Route path='/' element = {<NavigationBar />}>
        <Route index element={<Home />}/>
        <Route path ='shop' element={<Shop />} />
        <Route path ='auth' element={<Authentication />} />
      </Route> 
    </Routes>
  );
}

export default App;

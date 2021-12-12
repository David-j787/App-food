import './App.css';
import LandingDesign from './Components/Landing/Landing';
import HomePage from './Components/Home/home.jsx';
import RecipeCreated from './Components/addRecipe/addRecipe';
import Detail from './Components/Details/Details';
import {Routes, Route} from 'react-router-dom';


function App() {

  //<Route path = '' element = {</>}></Route>
  return (   
    <Routes>
      <Route exact path= '/' element= {<LandingDesign/>}></Route>
      <Route path = '/home' element = {<HomePage/>}></Route>
      <Route path = '/home/:id' element = {<Detail/>}></Route>
      <Route path = '/add' element = {<RecipeCreated/>}></Route>
    </Routes>   
  );
}

export default App;

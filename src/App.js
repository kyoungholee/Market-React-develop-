import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import ImageRender from './images/Image';
import Footer from "./components/Footer";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Join from "./components/Join";

function App() {


  // const movies = [
  //   {title: '첫번째 사진', src : hotdogImage}
  // ];


/** Switch에 외부는 공통으로 위치하며
 * Switch에 내부는 url에 따라 각각 다르게 나타난다. 
*/
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
        <Switch> 
        <Route exact path = "/" >
        <Main />
        </Route>

        <Route path = "/Login" component = {Login}>
        
        </Route>

        <Route path = "/Join" component = {Join}>
        
        </Route>

        </Switch>
        <Footer/> 
    </div>
    </BrowserRouter>
  );
}

export default App;

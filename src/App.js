import Header from "./components/Header";
import Main from "./components/Main";
import {hotdogImage} from "./images/imageFile"
import { dumplingImage } from "./images/imageFile";
import ImageRender from './images/Image';
import Footer from "./components/Footer";

function App() {


  const movies = [
    //{title: '첫번째 사진', src : hotdogImage}
  ];


  return (
    <div className="App">
      <Header/>
        <Main name = "이곳이 프롭스" color = "red">
        </Main>
        <h2>사진 리스트 </h2>
        {movies.map(({src, title}) => (
          <ImageRender src = {src} title = {title} key = {title} />

      ))}


      <Footer/> 
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Main from "./components/Main";
import {useState} from 'react';
import Footer from "./components/Footer";
import Movie from "./components/Movie";

function App() {


  const movies = [
    {title: '사진입니다.', src: "images/올바른 핫도그.jpg"},
    {title: '사진dsdww입니다.', src: '올바른asd 핫도그.JPG'},
    {title: '사진rmfjssdk입니다.', src: '올바른ㅁㄴㅇㅁㅇㅇasd 핫도그.JPG'}
  ];
                           //원하는 이름 넣기
const renderMovies = movies.map(movie => {
  return (
    <Movie movie = {movie}/>
    


  )
})


  return (
    <div className="App">
      <Header/>
        <Main name = "이곳이 프롭스" color = "red">
    
        </Main>
        <h2>사진 리스트 </h2>
        {renderMovies}
      
      <Footer/> 
    </div>
  );
}

export default App;

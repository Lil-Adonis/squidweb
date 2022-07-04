import React, {useEffect} from 'react'
import Home from "./components/Home";
import Info from "./components/Info";
import Episodes from "./components/Episodes";
import Videos from "./components/Videos";
import Details from "./components/Details";
import scrollreveal from "scrollreveal"
//import Footer from "./components/Footer";

function App() {
  useEffect(()=>{
    const sr = scrollreveal({
      origin: "bottom",
      distance:"80px",
      duration:2000,
      reset:false,
    });
    sr.reveal(
      `
      #home,
      #info,
      #episodes,
      #videos,
      details
      `,
      {
        opacity:0,
        interval:500,
      }
    )

  },[])
  return <div>
    <Home/>
    <Info/>
    <Episodes/>
    <Videos/>
    <Details/>
  </div>;
  
}

export default App
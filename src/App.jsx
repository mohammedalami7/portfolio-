
import React, { useEffect} from "react"
import Header from "./components/1-header/header"
import Hero from "./components/2-hero/hero"
import Main from "./components/3-main/main"
 import Contact from "./components/4-contact/contact"
import Footer from "./components/5-footer/footer"




export function App(){

  useEffect(()=>{
   window.addEventListener('scroll',()=>{
     if(window.scrollY>500){
       setcond(true)
     }else{
       setcond(false)
     }
   })
  })
  const [cond,setcond]=React.useState(false)
return(
  <div className="container" id="up">
  
  <Header/>
  <div className="divider"/>
  <Hero/>
  <div className="divider"/>
  <Main/>
  <div className="divider"/>
  <Contact/>
  <div className="divider"/>
  <Footer/>
  {cond &&
   (<a href="#up" ><button className="icon-chevron-thin-up" id="scroll"  /></a>)
  }
  </div>
  
)
}



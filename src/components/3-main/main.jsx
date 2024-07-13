
import React from 'react'
import './main.css'
import { data } from '../../data'
import { motion } from 'framer-motion';
export default function Main() {
  const [arr, setArr] =React.useState(data);
  function shearch0() {setArr(data);}
  function shearch1(genre) {const filteredArr = data.filter(item => item.genre ===genre);setArr(filteredArr);}
  /////////////
  let articles=arr.map(function(el){
    return <motion.div key={el.id} className='art' initial={{  transform:" scale(0.5)"}} animate={{ transform:" scale(1)" }}transition={{ type:'spring',damping:8,stiffness:400,}}>
      <img src={el.img} alt="" />
      <div>
        <h3>{el.title}</h3>
        <p>{el.information}</p>
      </div>
      <div>
        <a href={el.linkGet} className='icon-github' ></a>
       <a href={el.linkProject} className='icon-link'>visite</a>
      </div>
    </motion.div>
  })
  ///////
  let [buttons,setbuttons]=React.useState('first')
 

  return (
     <main id='projects'>
      <div className="slideleft">
        <ul id='buttons'>
          <li onClick={() => {setbuttons('first');shearch0();}} className={buttons === 'first' ? 'active' : null}>all project</li>
          <li onClick={()=>{setbuttons('second'); shearch1('react');}}  className={buttons=== 'second'?'active':null} >React js</li>
          <li  onClick={()=>{setbuttons('third');shearch1('html-css');}}  className={buttons=== 'third'?'active':null}  >html & css</li>
          <li  onClick={()=>{setbuttons('fourth');shearch1('javascript');}}  className={buttons=== 'fourth'?'active':null} >javascript</li>
        </ul>
      </div>
      <div className="slideright">
     { articles}
      </div>
     </main>
  )
}
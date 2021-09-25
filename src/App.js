import { useEffect, useState } from 'react';
import './App.css';
import Cointags from './components/Cointags/Cointags';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { putTheme, setTheme } from './services/getTheme';
function App() {
   
  const [toggle,setToggle] = useState(false);
  const [screenWidth,setScreenWidth] = useState(window.innerWidth);
  
  const keyPress = (e) => {
    if(e.keyCode===188 && e.ctrlKey) {
        if(!toggle) { 
          setTheme("light-theme");
        }
        else{ 
          setTheme("dark-theme")
        }
        setToggle(!toggle);
        return;
    }
}


  useEffect(()=> {

      putTheme();
      window.onkeydown = keyPress;
      window.addEventListener("resize",()=>{
          setScreenWidth(window.innerWidth);
      }) 
  })



  return (
    <div className="App">
        <Navbar width={screenWidth} isToggle={toggle} />
        <Cointags/> 
    </div>
  );
  }
  export default App;

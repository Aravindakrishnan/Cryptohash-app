import { useEffect, useState } from 'react';
import './App.css';
import Cointags from './components/Cointags/Cointags';
import Navbar from './components/Navbar/Navbar';
import { putTheme, setTheme } from './services/getTheme';
function App() {
   
  const [toggle,setToggle] = useState(false);

  
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
  })



  return (
    <div className="App">
        <Navbar isToggle={toggle} />
        <Cointags/> 
    </div>
  );
  }
  export default App;

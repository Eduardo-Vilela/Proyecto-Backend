import React, { useState }  from 'react';
import Rutas from './Components/Rutas';
import Splash from './Pages/Splash/Splash';
import { useSpring, animated } from 'react-spring';


function App() {

  const [loading, setLoading] = useState(true); {
    setTimeout(()=>{
      setLoading(false);
    }, 2500);
  }

  const fadeOut = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2900,
  })

  if(loading){
    return(
      <Splash/>
    )
  }else{
    return (
      <>
      <animated.div style={fadeOut}>
        <Rutas/>
      </animated.div>
      </>
  );
  }
}

export default App;

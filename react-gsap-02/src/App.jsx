import './App.css';
import { useRef, useLayoutEffect } from "react";  
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const container = useRef();

  useLayoutEffect(() => { 
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,  
        start: "50% 50%",  
        end: "250% 50%",  
        scrub: true,  
        pin: container.current,  
        // markers: true,  
      }
    });

    tl.to(".svg", {
      maskSize: "200%"
    }, 'a');

    tl.to(".img", {
      backgroundSize: "100%"
    }, 'a');

    tl.to(".svg2", {
      maskSize: "200%"
    }, 'b');

    tl.to(".img2", {
      backgroundSize: "100%"
    }, 'b');
  }, []);

  return (    <div ref={container} className="main">
    <div className="svg">
      <div className="img">
        <div className="svg2">
          <div className="img2"></div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App
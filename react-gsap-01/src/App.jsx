import "./App.css";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

function App() {

  const container = useRef()

useGSAP(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".inner",  
      start: "top top",   
      end: "300% top",    
      pin: true,           
      scrub: 1,           
      // markers: true    
    }
  });


  tl.to(".our-work-txt", { height: "60vh" }, 'start')  
    .to("#our", { left: "0%" }, 'start')                
    .to("#work", { right: "0%" }, 'start')               

  tl.to(".scroll-img", {
    marginTop: "-300%",     
    duration: 3,            
    ease: "none"
  }, 'start');             

  tl.to(".scroll-img img", {
    opacity: 1,          
    stagger: 0.5,     
    duration: 1 
  }, 'start');
}, { scope: container });

    
  return (
    <>
      <div className="main" ref={container}>
        <div className="inner">
            <div className="our-work-txt">
            <h1 id="our">Our</h1>
            <h1 id="work">Work</h1>
          </div>
          <div className="our-work-txt-dev">
            <div className="scroll-work">
              <div className="scroll-img">
                <img
                  src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1690106505816-6ba357b09c45?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1704298957507-58723920474f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
          </div>
          <button id="demo">Book a Demo</button>
      </div>
      </div>
    </>
  );
}

export default App;

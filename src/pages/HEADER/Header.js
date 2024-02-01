
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import Styles from "./estilo.module.css"

function Header(){

 const headerRef = useRef(null);

  const myObserve = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
       entry.target.classList.add(Styles.show)
       
       console.log('entecedeu')
      }else{
        console.log('não entencedeu')
        entry.target.classList.remove(Styles.show)
      }
    });
  });

  useEffect(() => {
    
    if (headerRef.current) {
      myObserve.observe(headerRef.current);
    }

    return () => {
      myObserve.disconnect();
    };
  }, [headerRef]);

   

    return(
        <header className={Styles.header} ref={headerRef}>
        <div className={Styles.links_infor}>
          <Link to="/"><div className={Styles.items}>Home</div></Link>
          
          <Link to ="/soprojetos"><div className={Styles.items}>projetos</div></Link>
         
         <Link to="/tecnologias"> <div className={Styles.items}>Tecnologias</div></Link>
         
      
         </div>
    
         <div className={Styles.titulo_porti}>
         
          <div className={Styles.informPorti}>
           <h1>Portfólio</h1>
          <h2>Olá, meu nome é Ismael e sou programador "Front-end Júnior". </h2></div>
          <div className={Styles.image}>
            <h1>Img...</h1>
             {/* <img src={MinhaImagen}alt="imagens"/> */}
          </div>
         </div>
         
       </header>
      
    )
}

export default Header
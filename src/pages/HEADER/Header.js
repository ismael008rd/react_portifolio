

import { Link } from "react-router-dom"
import Styles from "./estilo.module.css"

function Header(){

 
  

   

    return(
        <header className={Styles.header} >
        <div className={Styles.links_infor}>
    
          <a href="#home"><div className={Styles.items}>Home</div></a>
          <a href="#projetos"><div className={Styles.items}>projetos</div>
         </a>
           <a href="#tecnologias"><div className={Styles.items}>Tecnologias</div></a>
    
         
  
         </div>
    
         <div className={Styles.titulo_porti} id="home">
         
          <div className={Styles.informPorti}>
           <h1>Portfólio</h1>
          <h2>Olá, meu nome é Ismael e sou programador "Front-end Júnior". </h2></div>
         
         </div>
         
       </header>
      
    )
}

export default Header
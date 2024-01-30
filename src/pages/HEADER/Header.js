
import { Link } from "react-router-dom"
import Styles from "./estilo.module.css"
import MinhaImagen from './img/img_mavel.jpg'
function Header(){
    return(
        <header className={Styles.header}>
        <div className={Styles.links_infor}>
          <Link to="/"><div className={Styles.items}>sobre</div></Link>
          
          <Link to = "/watch"><div className={Styles.items}>projetos</div></Link>
         
         <Link to="/tecnologias"> <div className={Styles.items}>Tecnologias</div></Link>
         
      
         </div>
    
         <div className={Styles.titulo_porti}>
         
          <div className={Styles.informPorti}>
           <h1>Portfólio</h1>
          <h2>Olá, meu nome é Ismael e sou um programador frontend junior. Busco oportunidades para ingressar em uma grande empresa e contribuir com os meus conhecimentos e habilidades na área.</h2></div>
          <div className={Styles.image}>
            <h1>IMG...</h1>
             {/* <img src={MinhaImagen}alt="imagens"/> */}
          </div>
         </div>
         
       </header>
      
    )
}

export default Header
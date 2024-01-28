
import { Link } from "react-router-dom"
import Styles from "./estilo.module.css"
import MinhaImagen from './img/img_mavel.jpg'
function Header(){
    return(
        <header className={Styles.header}>
        <div className={Styles.links_infor}>
          <Link to="/"><div className={Styles.items}>sobre</div></Link>
          
          <Link to = "/watch"><div className={Styles.items}>projetos</div></Link>
         
         <div className={Styles.items}>Formularios</div>
      
         </div>
    
         <div className={Styles.titulo_porti}>
         
          <div className={Styles.informPorti}><h1>Portifolio</h1>
          <h2>Olá, meu nome é ismael tenho 22 anos e sou programador frontend junior tenho objetivo de entrar em uma grande empresa</h2></div>
          <div className={Styles.image}>
             <img src={MinhaImagen}alt="imagens"/>
          </div>
         </div>
         
       </header>
      
    )
}

export default Header
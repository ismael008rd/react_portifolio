import { Link } from "react-router-dom"
import Projetos from "../../PROJETOS/Projetos"
import Styles from "../Sotecnologia/Sotecnologia.module.css"

function Soprojetos(){
    return(
        <>
         <header className={Styles.header}>
          
          <div className={Styles.links_infor}>
          <Link to="/"><div className={Styles.items}>Home</div></Link>
          
          <Link to = "/soprojetos"><div className={Styles.items}>projetos</div></Link>
          
          <Link to="/tecnologias"> <div className={Styles.items}>Tecnologias</div></Link>
        
          </div>
      </header>
      <Projetos/>
      <footer className={Styles.footer}>
           Tecnologias
        </footer>
        </>
    )
}

export default Soprojetos
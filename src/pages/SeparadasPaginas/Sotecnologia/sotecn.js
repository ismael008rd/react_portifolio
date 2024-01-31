
import { Link } from "react-router-dom"
import Tecnologias from "../../Tecnologia/tecnologia"
import Styles from "./Sotecnologia.module.css"



function Sotecnologia(){
    return(
        <>
        <header className={Styles.header}>
          
            <div className={Styles.links_infor}>
            <Link to="/"><div className={Styles.items}>Home</div></Link>
            
            <Link to = "/soprojetos"><div className={Styles.items}>projetos</div></Link>
            
            <Link to="/tecnologias"> <div className={Styles.items}>Tecnologias</div></Link>
          
            </div>
        </header>
        <Tecnologias/>

        <footer className={Styles.footer}>
           Tecnologias
        </footer>
        </>
    )
}

export default Sotecnologia
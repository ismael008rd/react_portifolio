import Style from "./tecnologi.module.css"

import Card from "./Card"
import InforTecn from "./imgs/ImagemT"



function Tecnologias(){
   

    console.log()
    return (
        <>
       <div className={Style.tecnologias}>
        
        {

            InforTecn.map((data)=>(
               
                <>
                <Card key={data.id} id={data.id} {...data} className={Style.card_tecnologia}>
                    
                </Card>
               
                </>
            )
               
            )
        }

       </div>
        </>
    )
}
export default Tecnologias
import Style from "./tecnologi.module.css"
import Json from "./tacnologia.json"
import Card from "./Card"


function Tecnologias(){

    console.log()
    return (
        <>
       <div className={Style.tecnologias}>
        
        {
            Json.map((data)=>(
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
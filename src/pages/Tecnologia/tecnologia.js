import Style from "./tecnologi.module.css"


import InforTecn from "./imgs/ImagemT.js"



function Tecnologias(){
   

    return (
        <>
       <div className={Style.tecnologias}>
        
        {
           InforTecn.map((data)=>(
               
                <>
                   <div className={Style.card_tecnologia} id={data.id}>
                    <h1>{data.tecnologia}</h1>
                    <div>
                        <img src={data.url} alt="tecnologia"/>
                    </div>
                    <h2>{data.texto}</h2>
                   </div>
                </>
             ) )
        }

       </div>
        </>
    )
}
export default Tecnologias
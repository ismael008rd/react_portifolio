import Style from "./tecnologi.module.css"


import InforTecn from "./imgs/ImagemT.js"



function Tecnologias(){
   

    return (
        <>
       <div className={Style.tecnologias} id="tecnologias">
        
        {
           InforTecn.map((data)=>(
               
                <>
                   <div className={Style.card_tecnologia} id={data.id}>
                    <div className={Style.tec__img}>
                    <h1>{data.tecnologia}</h1>
                            <div className={Style.img_card}>
                                <img src={data.url} alt="tecnologia"/>
                            </div>
                    </div>
                    <div className={Style.title}>
                    <h2>{data.texto}</h2>
                    </div>
                   
                   
                   </div>
                </>
             ) )
        }

       </div>
        </>
    )
}
export default Tecnologias
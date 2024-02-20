import Style from "./projeto.module.css";
import InforProjeto from "./inforPr.json";
function Projetos() {
  return (
    <>
      <div className={Style.projeto} id="projetos">
        <div className={Style.cards}>

          {InforProjeto.map((data) => (
            <>
             
              <div className={Style.card} id={data.id}>
                <h2>{data.op}</h2>
                <div>
                  <a href={data.url} target="_blank">
                    {data.name}
                  </a>
                </div>
                <div className={Style.description}> {data.description}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projetos;

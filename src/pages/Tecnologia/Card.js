



function Card({ className,id, Tecnologia,img, texto}) {


  return (
    <div className={className} id={id}>
      <h1>{Tecnologia}</h1>
      <div>
        <img src={img} alt="tecnologia"/>
      </div>
      <h2>{texto}</h2>

  

    </div>
  );
}

export default Card;




function Card({ className,id, tecnologia,url, texto}) {

 


  return (
    <div className={className} id={id}>
      <h1>{tecnologia}</h1>
      <div>
        <img src={url} alt="tecnologia"/>
      </div>
      <h2>{texto}</h2>

     
     

    </div>
  );
}

export default Card;

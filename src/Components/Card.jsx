//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario


function Card({name, color}) {
  return (

    <div>
      <h2>Nombre: {name}</h2>
      <h2>Color favorito: {color}</h2>
    </div>
  );
}

export default Card;

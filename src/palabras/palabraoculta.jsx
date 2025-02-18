export const PalabraOculta = ({palabrasecreta,aciertos}) => {

    const mostrarPalabra = () => {
        return palabrasecreta
          .split('')
          .map((letra) => (aciertos.includes(letra) ? letra : '_'))
          .join(' ');
      };
    
    return (
        <>
        <p>
            {mostrarPalabra()}
        </p>
        </>
    )
    
}
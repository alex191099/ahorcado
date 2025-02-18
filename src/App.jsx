import { useEffect, useState } from 'react'
import './App.css'
import { Dibujoscolgao } from './dibujos/dibujoscolgao'
import { palabras } from './palabras/palabras'
import { PalabraOculta } from './palabras/palabraoculta';
import { Modal } from './Modal';
function App() {

  /* Errores */
  const [errores, setErrores] = useState(0);

  const aumentarerrores = () => {
    setErrores((errores) => errores +1)
    console.log(errores)
  }
  /* Fallos */
  const [fallos, setfallos] = useState([])

  /* Aciertos */
  const [aciertos, setaciertos] = useState([])
  /* Palabras */
  const getpalabrarandom = () => palabras[Math.floor(Math.random() * palabras.length)]

  const [ganador, setGanador] = useState(null)

  const [palabrasecreta, setpalabrasecreta] = useState(getpalabrarandom().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
  
  const resetear = () => {
    setGanador(null)
    //errores a 0
    setErrores(0)
    //palabra nueva
    setpalabrasecreta(getpalabrarandom().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    //borrar errores
    setfallos([])
    setaciertos([])
  }

  const comprobarletra = (letra) => {
    //está en la palabra?
    if(palabrasecreta.includes(letra)){
      //si
        //mostrar letra

        //guardar letra
        setaciertos((aciertos) => (aciertos.includes(letra) ? aciertos : [...aciertos,letra]))
        
          //TO-DO comprobar si ha acertado la palabra entera
        //setGanador(true)

    }else{
      //no
        //aumentar errores
        aumentarerrores()
        //añadir letra a fallos
        setfallos((fallos) => [...fallos, letra])
        console.log(fallos)
        console.log(errores)
        if(errores == 5) setGanador(false)
    }
  }
          

  useEffect (() => {
    const teclapresionada = (event) => {
      if(ganador == null){

        const letra = event.key.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        
        if(/^[a-z]$/.test(letra)){
          comprobarletra(letra, errores)
        }
      }
    }
    window.addEventListener("keydown", teclapresionada)
    return () => window.removeEventListener("keydown", teclapresionada)
  }, [errores,aciertos])

  useEffect(() => {
    if (palabrasecreta.split('').every((letra) => aciertos.includes(letra))) {
      setGanador(true)
    }
  }, [aciertos])
  return (
    <>
        <pre>
          <Dibujoscolgao errores={errores}></Dibujoscolgao>
          <PalabraOculta palabrasecreta={palabrasecreta} aciertos={aciertos}></PalabraOculta>
          <p>Fallos: {fallos} Aciertos: {aciertos}</p>
{/*           <p className='dibujoscolgao'>{palabrasecreta}</p>
 */}          {/*<button onClick={aumentarerrores}>Aumentar errores</button>*/}
          <Modal ganador={ganador} palabrasecreta={palabrasecreta} reset={resetear}></Modal>
          
        </pre>
    </>
  )
}



export default App

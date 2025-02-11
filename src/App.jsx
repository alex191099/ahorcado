import { useEffect, useState } from 'react'
import './App.css'
import { Dibujoscolgao } from './dibujos/dibujoscolgao'
import { palabras } from './palabras/palabras'
import { PalabraOculta } from './palabras/palabraoculta';
function App() {

  /* Errores */
  const [errores, setErrores] = useState(0);

  const aumentarerrores = () => {
    setErrores(errores+1)
  }
  /* Fallos */
  const [fallos, setfallos] = useState([])

  /* Aciertos */
  const [aciertos, setaciertos] = useState([])
  /* Palabras */
  const palabrasecreta = palabras[Math.floor(Math.random() * palabras.length)]
  
  useEffect (() => {
    const teclapresionada = (event) => {
      const letra = event.key.toLowerCase()

      if(/^[a-z]$/.test(letra)){
        
      }
    }
    window.addEventListener("keydown", teclapresionada)
    return () => window.removeEventListener("keydown", teclapresionada)
  }, [])

  return (
    <>
        <pre>
          <Dibujoscolgao errores={errores}></Dibujoscolgao>
          <PalabraOculta></PalabraOculta>
          <p className='dibujoscolgao'>{palabrasecreta}</p>
          <button onClick={aumentarerrores}>Aumentar errores</button>
        </pre>
    </>
  )
}



export default App

import './App.css'
import { Dibujoscolgao } from './dibujos/dibujoscolgao'
import { palabras } from './palabras/palabras'
function App() {

  /* Errores */
  
  /* Palabras */
  const palabrasecreta = palabras[Math.floor(Math.random() * palabras.length)]
  return (
    <>
        <pre>
          <Dibujoscolgao errores={"6"}></Dibujoscolgao>
          <p className='dibujoscolgao'>{palabrasecreta}</p>
        </pre>
    </>
  )
}

export default App

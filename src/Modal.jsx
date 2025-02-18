export function Modal ({ganador, reset, palabrasecreta}) {
    
    if (ganador === null) return null

    const txt = ganador === false ? 'Perdiste!' : 'Ganaste!' 

    return (
        <section className="winner">
            <div className="test">
                <h2>{txt}</h2>
                <p>La palabra era: {palabrasecreta} </p>
                <button onClick={reset}>Reset</button>
            </div>
        </section>
    )
}
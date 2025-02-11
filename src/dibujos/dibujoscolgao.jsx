import './dibujoscolgao.css'
export const Dibujoscolgao = ({ errores }) => {
    const dibujos = [
      [
        "  +--+ ",
        "  |  | ",
        "     | ",
        "     | ",
        "     | ",
        "======="
      ],
      [
        "  +--+ ",
        "  |  | ",
        "  O  | ",
        "     | ",
        "     | ",
        "======="
      ],
      [
        "  +--+ ",
        "  |  | ",
        "  O  | ",
        "  |  | ",
        "     | ",
        "======="
      ],
      [
        "  +--+ ",
        "  |  | ",
        "  O  | ",
        " /|  | ",
        "     | ",
        "======="
      ],
      [
        "  +--+ ",
        "  |  | ",
        "  O  | ",
        " /|\\ | ",
        "     | ",
        "======="
      ],
      [
        "  +--+ ",
        "  |  | ",
        "  O  | ",
        " /|\\ | ",
        " /   | ",
        "======="
      ],
      [
        "  +--+ ",
        "  |  | ",
        "  O  | ",
        " /|\\ | ",
        " / \\ | ",
        "======="
      ]
    ]

    return (
        <div className="dibujoscolgao">
          {dibujos[errores].map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
    )
    
}


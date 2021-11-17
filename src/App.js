import Chessboard from "chessboardjsx";
import "./App.css";
import Stockfish from "./components/stockFish";

function App() {
  const getMoveFlag = (h) => {
    if (!h || !h.flags) {
      return;
    }

    let color = h.color.toUpperCase();
    switch (h.flags) {
      case "n":
        return `${color} made a non-capture`;
      case "b":
        return `${color} made a pawn push of two squares`;
      case "e":
        return `${color} made an en passant capture`;
      case "c":
        return `${color} made a standard capture`;
      case "p":
        return `${color} made a promotion`;
      case "k":
        return `${color} made a kingside castling`;
      case "q":
        return `${color} made a queenside castling`;
      case "pc":
        return `${color}'s pawn captured a piece on the 8th rank and promoted.`;
      default:
        return "promotion";
    }
  };
  return (
    <Stockfish>
      {({
        position,
        onDrop,
        getCurrentPlayer,
        draggable,
        allowDrag,
        squareStyles,
        dropSquareStyle,
        onDragOverSquare,
        onSquareClick,
        onSquareRightClick,
        history,
        reset,
      }) => (
        <div className="App">
          <div className="chessBoard">
            <div>
              <h1>{`it's currently ${
                getCurrentPlayer().toLowerCase() === "w" ? "Computer's" : "Your"
              } turn`}</h1>
              <Chessboard
                id="humanVsComputer"
                calcWidth={({ screenHeight, screenWidth }) =>
                  screenWidth > 425 ? 450 : screenWidth - 5
                }
                position={position}
                onDrop={onDrop}
                allowDrag={allowDrag}
                boardStyle={{
                  borderRadius: "5px",
                  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
                }}
                draggable={draggable}
                squareStyles={squareStyles}
                dropSquareStyle={dropSquareStyle}
                onDragOverSquare={onDragOverSquare}
                onSquareClick={onSquareClick}
                onSquareRightClick={onSquareRightClick}
                orientation="black"
              />
            </div>
          </div>
          <div className="game-details">
            <h1>Game Details</h1>
            <div className="flex justify-between items-center">
              <h2>History</h2>
              <button id="reset-button" onClick={reset}>
                Start Over
              </button>
            </div>
            <div className="move-actions">
              <ul>
                {history.map((i, index) => {
                  return (
                    <li
                      key={index}
                      style={{
                        color: i.color.toLowerCase() === "w" ? "" : "black",
                      }}
                    >
                      {getMoveFlag(i)}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="history">
              <h2 id="history-header">Moves</h2>
              <div className="historyBox">
                <ul>
                  {history.map((i, index) => (
                    <li key={index}>
                      <span>
                        {index % 2 === 0 ? `${index / 2 + 1 + ". "}` : ""}
                      </span>
                      {i.san}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </Stockfish>
  );
}

export default App;

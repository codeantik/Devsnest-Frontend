const Board = () => {
    let cells = []
    let cnt = 0
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        cells.push(
          <div
            className="cell"
            key={cnt}
            style={{ backgroundColor: (i + j) % 2 === 0 ? "#000" : "#fff" }}
          ></div>
        );
        cnt++
      }
    }
    return cells
  };
  
  export default Board;
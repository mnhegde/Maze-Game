import React, {useEffect,useState} from "react";
import ReactDOM from "react-dom";
import "../Styles/maze.css"
export default function Maze() {
  const sideWidth = (50 * window.innerWidth) / 100;
  const bottomHeight = (25 * window.innerHeight) / 100;
  const ratio = (window.innerWidth - sideWidth) / (window.innerHeight - bottomHeight);
  const [mazeTable, setMazeTable] = useState(<h1>maze</h1>)
  let gridX;
  let gridY;
  let cellSize = 1;
  let rows = []
  let grid;
  let startPos = [0, 0]
  let endPos = [0, 0]
  const setProperties = () => {
    if (ratio > 1) {
      gridX = window.innerWidth - sideWidth;
      gridY = Math.floor((window.innerHeight - bottomHeight) / ratio);
      if (gridY % 2 === 0) gridY++;
    } else {
      gridX = Math.floor(window.innerWidth - sideWidth * ratio);
      gridY = window.innerHeight - bottomHeight;
      if (gridX % 2 === 0) gridX++;
    }
    //console.log(gridY)
  };
  const genGrid = () => {
    setProperties()
    for (let i = 0; i < gridY/2; i+=13) {

      let cells = []
      for (let j = 0; j < gridX; j+=9) {
        let cellClass = ""
        if ((i + j) % 2 === 0)
        cellClass = "cell cell1"
        else
        cellClass = "cell cell2"
        cellClass += " x_" + j.toString(10) + " y_" + i.toString(10);
        let cell = React.createElement("td",{className: cellClass})
        cells.push(cell)

      }
      rows.push(React.createElement("tr",{},cells))
    }
    const table = React.createElement("table", { style:{"height":"50vh"}, id: "grid" }, rows)
    setMazeTable(table)
    grid = new Array(gridX).fill(0).map(() => new Array(gridY).fill(0))
    endPos = [gridX - 1, gridY - 1]
  }
  useEffect(()=>{
    genGrid()
  },[])
  const deleteGrid = () => {
    document.querySelector("#grid").remove()
  }
  const getCell = (x, y) => {
    return document.querySelector(".x_" + x.toString(10) + ".y_" + y.toString(10));
  }
  const add_wall = (x, y) => {
    let cell = getCell(x, y);

    if (!cell.classList.contains("start") && !cell.classList.contains("target")) {
      grid[x][y] = -1;
      cell.classList.add("cell_wall");
    }
  }
  const removeWall = (x, y) => {
    grid[x][y] = 0;
    getCell(x, y).classList.remove("cell_wall");
  }
  const getNode = (x, y) => {
    if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length)
      return grid[x][y];

    return -2;
  }
  
  
  return (
    <>
    {mazeTable}
    </>
    
  );
}

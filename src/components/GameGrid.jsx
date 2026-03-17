import { Grid } from "react-window";
import { useState, useEffect } from "react";
import GameCard from "./GameCard";

function CellComponent({ columnIndex, rowIndex, style, items, columnCount }) {
  const index = rowIndex * columnCount + columnIndex;
  const item = items[index];

  if (!item) return null;

  return (
    <div style={{ ...style, padding: "10px" }}>
      <GameCard item={item} />
    </div>
  );
}

function GameGrid({ items }) {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columnWidth = 260;
  const columnCount = Math.floor(width / columnWidth);

  const rowCount = Math.ceil(items.length / columnCount);

  return (
    <div style={{ marginTop: "20px" }}>
      <Grid
        cellComponent={CellComponent}
        cellProps={{ items, columnCount }}
        columnCount={columnCount}
        columnWidth={columnWidth}
        rowCount={rowCount}
        rowHeight={420}
        style={{ width: "100%", height: 700 }}
      />
    </div>
  );
}

export default GameGrid;
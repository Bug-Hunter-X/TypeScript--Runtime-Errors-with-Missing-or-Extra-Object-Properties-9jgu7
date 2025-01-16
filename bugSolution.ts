function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

function printCoordSafe(pt: { x?: number; y?: number }) {
  if (pt.x !== undefined && pt.y !== undefined) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  } else {
    console.error("Incomplete coordinate data provided.");
  }
}

printCoord({ x: 3, y: 7 });
printCoordSafe({ x: 3, y: 7 });
printCoordSafe({ x: 3 });
printCoordSafe({});
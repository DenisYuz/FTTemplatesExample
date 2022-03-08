import turf, { point, polygon, booleanIntersects } from "turf";

function createRandomPolygon() {
  let result = [];
  const polyFOV = turf.polygon(
    [
      [
        [-122.3104, 47.6627],
        [-122.3071, 47.6627],
        [-122.3071, 47.6644],
        [-122.3104, 47.6644],
        [-122.3104, 47.6627],
      ],
    ],
    { stroke: "#0FF", fill: "#0FF", "fill-opacity": 0.3, "stroke-width": 6 }
  );
  return result;
}

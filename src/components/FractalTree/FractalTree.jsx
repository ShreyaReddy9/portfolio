import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

const sketch = (p5) => {
  let angle;

    p5.setup = () => {
    p5.createCanvas(400, 400);
    p5.stroke(255);
    angle = p5.PI / 4;
  };

  p5.draw = () => {
    p5.background('#04152d');
    p5.translate(200, p5.height);
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16);
    drawBranch(100);
  };

  function drawBranch(len) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      drawBranch(len * 0.67);
      p5.pop();

      p5.push();
      p5.rotate(-angle);
      drawBranch(len * 0.67);
      p5.pop();
    }
  }
};

const FractalTree = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <ReactP5Wrapper sketch={sketch} />
      <p style={{ color: "#ccc", marginTop: "10px" }}></p>
    </div>
  );
};

export default FractalTree;

import TiledImage from '../TiledImage';
import * as React from 'react';
import reportWebVitals from '../reportWebVitals';
// import image from '../img/first_mage.png';

interface Props {
  // Any props you want to pass to the component
}

interface State {
  // Any state you want to store in the component
}

export default class MyAnimation extends React.Component<Props, State> {
  private canvasRef = React.createRef<HTMLCanvasElement>();
  private tiledImage: TiledImage | null = null;
  private animationFrame: number = 0;

  componentDidMount() {
    // Create the TiledImage object
    let columnCount = 2;
    let rowCount = 4;
    let refreshDelay = 500; 			
    let loopColumns = true; 			
    let scale = 1.0;
    let image = require('../img/first_mage.png');
    let row = 3;
    this.tiledImage = new TiledImage(image, columnCount, rowCount, refreshDelay, loopColumns, scale);
    this.tiledImage.changeRow(row);			
    this.tiledImage.changeMinMaxInterval(0, 2); 	
    this.tiledImage.setMinMaxDimensions(32, 32, 64, 64);


    // Start the animation loop
    this.tickCanvas();
  }

  componentWillUnmount() {
    // Stop the animation loop
    cancelAnimationFrame(this.animationFrame);
  }

  tickCanvas = () => {
    // Get the canvas and rendering context
    let canvas = this.canvasRef.current!;
    let ctx = canvas.getContext("2d")!;

    // Clear the canvas and draw the next frame of the animation
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (this.tiledImage){
        this.tiledImage.tick(100, 100, ctx);
    }

    this.tiledImage?.changeRow(3);
    // Request the next animation frame
    this.animationFrame = requestAnimationFrame(this.tickCanvas);
    
    
  }

  render() {
    return (
      <canvas ref={this.canvasRef} width={400} height={200} />
    );
  }
}

import * as React from 'react';

export default class CanvasComponent extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div>
                <canvas id="myCanvas" width="1000" height="100" style={{background:'red'}}></canvas>
            </div>
        )
    }
}
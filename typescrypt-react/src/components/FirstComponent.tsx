import * as React from 'react';
let img = "../img/apple.png";
export default class FirstComponent extends React.Component {
    render() {
        return (
           <div>
            <h3>
                A simple react component example with typescript
            </h3>
            <div>
                <img src={img} />
            </div>
            <p>this component shows the apple logo</p>
           </div>
        );
    }
}
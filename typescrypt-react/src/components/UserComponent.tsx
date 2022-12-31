import * as React from 'react';
import UserInterface from '../UserInterface'
export default class UserComponent extends React.Component<UserInterface> {
    constructor(props: UserInterface) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>User Component</h1>
                <p>Hello, <b>{this.props.name}</b></p>
                <p>You are <b>{this.props.age}</b></p>
                <p>You live at: <b>{this.props.address}</b></p>
                <p>You were born: <b>{this.props.dob.toDateString()}</b></p>
            </div>
        )
    }
}
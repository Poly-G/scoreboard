import React, { Component } from 'react'

class AddPlayerForm extends Component {


playerInput = React.createRef();


handleSubmit = e => {
    e.preventDefault();
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
}

    render() {
        const {
            handleSubmit
         } = this;
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={this.playerInput}
                    placeholder="Enter a Players name"
                />

                <input
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }
}

export default AddPlayerForm
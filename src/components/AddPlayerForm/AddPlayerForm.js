import React, { Component } from 'react'

class AddPlayerForm extends Component {
    render() {
        return (
            <form>
                <input
                    type="text"
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
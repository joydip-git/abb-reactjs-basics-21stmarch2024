import React, { Component } from 'react'
import Name from '../name/Name'
import Value from '../value/Value'

export default class Parent extends Component {
    // constructor() {
    //     super()
    //     this.state = {

    //     }
    // }
    state = {
        nameData: 'anil',
        numData: 0
    }
    numDataHandler = () => {
        this.setState(
            (currentStateCopy) => {
                return {
                    numData: currentStateCopy.numData + 1
                }
            },
            () => console.log(this.state)
        )
    }
    // nameDataHandler = (eventObj) => {
    //     const newName = eventObj.target.value
    //     this.setState(
    //         { nameData: newName },
    //         () => console.log(this.state)
    //     )
    // }
    nameDataHandler = (newName) => {
        this.setState(
            { nameData: newName },
            () => console.log(this.state)
        )
    }
    render() {
        console.log('Parent rendered')
        return (
            <div>
                <Name nameValue={this.state.nameData} nameHandlerFn={this.nameDataHandler} />
                <br />
                <br />
                <Value numValue={this.state.numData} numHandlerFn={this.numDataHandler} />
            </div>
        )
    }
}

import { Component } from 'react';
import './App.css';
import Welcome from './Welcome';


// function App() {
//   //property object or props
//   //const welcomeElement = Welcome({messageValue:'Welcome to React JS', numValue:10, children:'', showHandler:[Function]})

//   let message = 'Welcome to React JS'
//   let num = 10
//   const show = () => {
//     console.log(message)
//     message = 'Welcome to React State'
//     //const welcomeElement = Welcome({messageValue:'Welcome to React State', numValue:10, children:'', showHandler:[Function]})
//     console.log(message)
//   }
//   return (
//     <div className="App">
//       {/*
//         welcomeElement
//       */}
//       <Welcome
//         messageValue={message}
//         numValue={num}
//         showHandler={show}
//       >
//         This is children prop
//       </Welcome>
//     </div>
//   );
// }

class App extends Component {

  state = {
    message: 'Welcome to React JS',
    num: 10
  }

  numHandler = () => {
    this.setState(
      (currentState) => {
        return {
          num: currentState.num + 1
        }
      }
    )
  }
  messageHandler = () => {
    //state object should NEVER be mutated directly  
    //this.state.message=''

    //it should always be mutated immutably
    // let copy = { ...this.state }
    // copy.message = 'Welcome to React State'
    // let newState = {
    //   ...this.state,
    //   ...copy
    // }

    //pass a new state object to the setState method
    //asynchronously update the state
    //after that it will recall the render() method of the class
    //this.setState(copy)
    this.setState({
      message: 'Welcome to React State'
    })
  }
  render() {
    console.log('App render:')
    const { message, num } = this.state
    return (
      <div className='App'>
        <Welcome messageValue={message} numValue={num} messageHandlerFn={this.messageHandler} increaseHandlerFn={this.numHandler}>
          This is children prop
        </Welcome>
      </div>
    )
  }
}
export default App;

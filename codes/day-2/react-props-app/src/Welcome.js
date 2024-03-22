import React, { Fragment } from 'react'

//propObject = {messageValue:message, numValue:10, children:'', showHandler:[Function], increaseHandlerFn:[Function]}
//presentational component
const Welcome = (propObject) => {
    console.log('welcome render')
    //you can't mutate the read-only propObejct
    //propObject.messageValue = 'welcome'
    return (
        // <Fragment>
        <>
            <span>
                {
                    propObject.messageValue
                }
            </span>
            <br />
            <span>
                Num: &nbsp;
                {
                    propObject.numValue
                }
            </span>
            <br />
            <span>
                {
                    propObject.children
                }
            </span>
            <br />
            <button
                onClick={propObject.messageHandlerFn}
            >
                Show
            </button>
            <br />
            <button onClick={propObject.increaseHandlerFn}>
                Increase
            </button>
        </>
        // </Fragment> 
    )
}
export default Welcome

// const Frag = (props) => {
//     return props.children
// }
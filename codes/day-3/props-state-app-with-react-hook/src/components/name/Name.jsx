//rfc or rfce
//rafc or rafce
import React from 'react'
import PropTypes from 'prop-types';

//props={nameValue:'anil'}
const Name = (props) => {

    // let design = ''
    // if (props.nameValue) {
    //     design = <span>{props.nameValue}</span>
    // } else {
    //     design = 'NA'
    // }
    // return (
    //     <div>
    //         <label>Name: &nbsp;</label>
    //         {
    //             design
    //         }
    //     </div>
    // )

    //or
    return (
        <div>
            <label htmlFor='txtName'>Name: &nbsp;</label>
            {
                /* if..else loop => ?:*/
                /*
                props.nameValue ? <span>{props.nameValue}</span> : 'NA' */

                /*if loop => && */
                /**
                  props.nameValue &&
                (
                    <input
                        id='txtName'
                        type='text' value={props.nameValue}
                        onChange={props.nameHandlerFn}
                    />
                )
                 */
                props.nameValue &&
                (
                    <input
                        id='txtName'
                        type='text' value={props.nameValue}
                        onChange={
                            (eventObj) => {
                                const newName = eventObj.target.value
                                if (newName && newName !== '')
                                    props.nameHandlerFn(newName)
                            }
                        }

                    />
                )
            }
        </div>
    )
}
Name.propTypes = {
    nameValue: PropTypes.string.isRequired,
    nameHandlerFn: PropTypes.func.isRequired
}
export default Name
import React from 'react'
import PropTypes from 'prop-types'

const PersonList = (props) => {
    const list = props.personRecords
    // const options = []
    // for (const name of list) {
    //     options.push(<option>{name}</option>)
    // }
    const options =
        list.map(
            (name, index) => {
                return (
                    //anti-pattern
                    // <option key={index}>
                    <option>
                        {name}
                    </option>
                )
            }
        )
    return (
        <div>
            <label htmlFor='ddlPeople'>
                List of People
            </label>
            <br />
            <button onClick={props.personListHandlerFn}>Sort the names</button>
            <br />
            <select id='ddlPeople'>
                <option selected disabled>
                    --select--
                </option>
                {
                    options
                }
            </select>
        </div>
    )
}
PersonList.propTypes = {
    personRecords: PropTypes.array.isRequired,
    personListHandlerFn: PropTypes.func.isRequired
}
export default PersonList

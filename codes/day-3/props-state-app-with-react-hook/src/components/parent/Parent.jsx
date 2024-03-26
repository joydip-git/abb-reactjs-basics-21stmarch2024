import React, { useState } from 'react'
import Name from '../name/Name'
import Value from '../value/Value'
import PersonList from '../person-list/PersonList'

const Parent = () => {
    console.log('Parent rendered')
    //const [numState, setNumState] = useState(0)
    // useState(false)
    // useState('')
    // useState({
    //     nameData: 'anil',
    //     numData: 0
    // })

    const [numData, setNumData] = useState(0)
    const [nameData, setNameData] = useState('anil')
    const [peopleList, setPeopleList] = useState(['anil', 'sunil', 'joydip'])

    const peopleListHandler = () => {
        const copyOfList = [...peopleList]
        copyOfList.sort(
            (a, b) => a.localeCompare(b)
        )
        setPeopleList(copyOfList)
    }
    const numDataHandler = () => {
        setNumData(
            (currentNum) => {
                return currentNum + 1
            }
        )
    }
    const nameDataHandler = (newName) => {
        setNameData(newName)
    }

    return (
        <div>
            <Name nameValue={nameData} nameHandlerFn={nameDataHandler} />
            <br />
            <br />
            <Value numValue={numData} numHandlerFn={numDataHandler} />
            <br />
            <br />
            <PersonList personRecords={peopleList} personListHandlerFn={peopleListHandler} />
        </div>
    )

}
export default Parent

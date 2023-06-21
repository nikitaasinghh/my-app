import React from 'react'
import { Made, Missed } from './Goal';

function Result(props) {
    const isGoal=props.isGoal;
    if(isGoal){
        return <Missed />
    }
        return <Made />
}

export default Result
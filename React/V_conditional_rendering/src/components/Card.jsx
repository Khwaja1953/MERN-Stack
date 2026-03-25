import React from 'react'

const Card = (props) => {
    if(props.name){
        return (
            <div>hello {props.name} how are you</div>
        )
    }
    else {
        return (
            <div>Hello user how are you</div>
        )
    }
    
}
export default Card
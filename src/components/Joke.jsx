
import React from "react"

export default function Joke () {
    console.log(props.isPun)
    return(
        <div>
            <h3>{props.setup}</h3>
            <p>{props.punchline}</p>
            <hr />
        </div>

    )
}

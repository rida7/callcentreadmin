import React, {Component} from "react";
import {Consumer} from "../../store";
import Child from "./table";
export default (props)=> {
    return (
        <Consumer>
            {
                ({dispatch, word}) => (
                    <Child children={props.children} dispatch={dispatch} word={word}/>
                )
            }
        </Consumer>
    )
}
import "./header.scss"
import React from "react"
import Top from "./HeaderTop/Top"
import HeaderControl from "./HeaderControl"
import HeaderNav from "./HeaderNav"



export default function Header({changeMind}) {
    return(
        <header>
            <Top />
            <HeaderControl changeMind = {changeMind}/>
            <HeaderNav />
        </header>
    )
}
import React from "react"
import trollFace from "../Images/TrollFace.png"

export default function Header(){
    return (
        <div className="header">
            <img className="header--img" src={trollFace} alt="Troll Face"/>
            <h2 className="header--title">Meme Generator</h2>
            <h3 className="header--text">React Course-Project3</h3>
        </div>
    )
}
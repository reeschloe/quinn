import {GiDogBowl} from "react-icons/gi"
import React, {useState} from "react"
import {useLocation} from "react-router-dom"
import "../styles/header.css"

export default function Header() {
    const [show, setShow] = useState(false)
    const {pathname} = useLocation()

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand dark" href="/">
                    <GiDogBowl className="d-inline-block align-text-top me-2"/>
                    Quinn
                </a>
                <button className="navbar-toggler" onClick={() => setShow(!show)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={(show ? "collapse navbar-collapse show" : "collapse navbar-collapse")} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={(pathname === "/" ? "nav-link dark" : "nav-link")} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={(pathname === "/about" ? "nav-link dark" : "nav-link")} href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className={(pathname === "/gallery" ? "nav-link dark" : "nav-link")} href="/gallery">Gallery</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
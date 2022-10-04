import {GiDogBowl} from "react-icons/gi"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    {/* <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" /> */}
                    <GiDogBowl className="d-inline-block align-text-top me-2"/>
                    Quinn
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Pricing</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
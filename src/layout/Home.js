import "../styles/home.css"
import pfp from "../images/pfp.jpeg"

export default function Home() {
    return (
        <div className="body">
            <img src={pfp} alt="dog named Quinn" />
            <h1>Quinn Rees</h1>
        </div>
    )
}
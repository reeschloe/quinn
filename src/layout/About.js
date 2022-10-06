import React, {useState} from "react"

export default function About() {
    const [show, setShow] = useState([])

    function handleClick(index) {
        if (show.includes(index)) {
            setShow(show.filter(num => num !== index))
        } else {
            setShow([...show, index])
        }
    }

    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" onClick={() => handleClick(0)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Likes
                </button>
                </h2>
                <div id="collapseOne" className={(show.includes(0) ? "accordion-collapse collapse show" : "accordion-collapse collapse")} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <ul>
                        <li>Food</li>
                        <li>Pets</li>
                        <li>More food</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" onClick={() => handleClick(1)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Dislikes
                </button>
                </h2>
                <div id="collapseTwo" className={(show.includes(1) ? "accordion-collapse collapse show" : "accordion-collapse collapse")} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <ul>
                        <li>Most toys</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" onClick={() => handleClick(2)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Fears
                </button>
                </h2>
                <div id="collapseThree" className={(show.includes(2) ? "accordion-collapse collapse show" : "accordion-collapse collapse")} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <ul>
                        <li>Squeaky toys</li>
                        <li>Loud noises</li>
                        <li></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}
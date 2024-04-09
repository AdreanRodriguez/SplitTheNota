import { useState } from "react";


function Card({ setTotalPer }) {

    const [sum, setSum] = useState(0);
    const [friends, setFriends] = useState(0);
    const [tip, setTip] = useState(0)

    const countPrice = () => {
        const calculateTip = (((sum / tip) + sum) / friends)
        setTotalPer(calculateTip)
    }

    const handleSum = (event) => {
        setSum(Number(event.target.value))
    }

    const handleFriends = (event) => {
        setFriends(Number(event.target.value))
    }

    const handleTip = (event) => {
        setTip(Number(event.target.value))
    }



    return (
        <section className="section">
            <div className="section-wrapper">
                <div className="card-div">
                    <label htmlFor="labelOne" className="label-text">Summa</label>
                    <input id="labelOne" type="number" className="card-text" placeholder="Totalsumman..." onChange={handleSum} />
                </div>
                <div className="card-div">
                    <label htmlFor="labelTwo" className="label-text">Antal vänner</label>
                    <input id="labelTwo" type="number" className="card-text" placeholder="4 vänner..." onChange={handleFriends} />
                </div>
                <div className="card-div">
                    <label htmlFor="labelThree" className="label-text">Dricks</label>
                    <input id="labelThree" type="number" className="card-text" placeholder="10%..." onChange={handleTip} />
                </div>
                <button className="card-btn" onClick={countPrice}>Räkna</button>
            </div>
        </section>
    )
}

export default Card;

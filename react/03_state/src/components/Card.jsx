import { useState } from "react"
export default function Card() {
    const [count, setCount] = useState(0)
    const data = [
        { name: "muzamil", email: "khw@gmail.com", phone: "1234", address: "handwara" },
        { name: "muneeb", email: "muneeb@mail.com", phone: "2345", address: "srinagar" },
        { name: "xyz", email: "xyz@gamil.com", phone: "0987", address: "abc" }

    ]
    const showCards = () => {
        if (count >= data.length - 1) {
            setCount(0)
        }
        else {
            setCount(count + 1)
        }
    }
    return (
        <div className="box">
            {/* <div className={`card abc${count}`}> */}
                <div className={`card ${data[count].name}`}>
                <p>Name: {data[count].name}</p>
                <p>Email: {data[count].email}</p>
                <p>Phone: {data[count].phone}</p>
                <p>Address: {data[count].address}</p>
            </div>
            <button onClick={() => { showCards() }}>Next Card</button>
        </div>
    )
}
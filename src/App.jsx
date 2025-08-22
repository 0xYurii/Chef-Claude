import React, { useState } from "react"
import avatar from "../images/user.png"
import starFilled from "../images/star-filled.png"
import starEmpty from "../images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        // isFavorite: true
    })
        /**
     * Challenge: Use a ternary to determine which star image variable
     * should be used based on the `contact.isFavorite` property. Test 
     * your results by manually changing the isFavorite value in state.
     * 
     * `true` => starFilled
     * `false` => starEmpty
     */

      let [staricon,setStarIcon]=useState(false)

    function toggleFavorite() {
        // console.log("Toggle Favorite")
        setStarIcon(prev=>!staricon)
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        aria-label="Add to favorites"
                        className="favorite-button"
                    >
                        <img
                            src={staricon ?starFilled: starEmpty}
                            alt="empty star icon"
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName } {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact"> {contact.email} </p>
                </div>

            </article>
        </main>
    )
}

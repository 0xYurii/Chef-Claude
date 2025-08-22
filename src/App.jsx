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
        isFavorite: false
    })

    let staricon=contact.isFavorite ? starFilled : starEmpty 

    function toggleFavorite() {
        setContact(prev=>{
          return{
            ...prev,
            isFavorite:!contact.isFavorite
          }
        })
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
                        aria-pressed={staricon}
                        aria-label={staricon? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={staricon}
                            alt={staricon ? "filled star icon" : "empty star icon"}
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

/**
 * App.jsx
 * Main application component that renders a simple counter interface.
 * Features:
 * - State management for count value using React.useState
 * - Increment/decrement functionality via button clicks
 * - Accessibility labels for screen readers
 * - Responsive layout with container styling
 * - Reusable Count component for displaying the current value
 */

import React from "react"
import Count from './Count'
export default function App() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    


    return (
        <main className="container">
            <div className="counter">
                <button
                    className="minus"
                    onClick={subtract}
                    aria-label="Decrease count"
                >-</button>

                
                <Count
                  number={count}
                />

                <button
                    className="plus"
                    onClick={add}
                    aria-label="Increase count"
                >+</button>
            </div>
        </main>
    )
}

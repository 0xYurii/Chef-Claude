export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    /**
     * Challenge:
     * Add an `onSubmit` event listener on the form. Have the function
     * simply console.log("Form submitted!") for now
     */

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient} >{ingredient}</li>
    ))

    function SubmitEvent(){
        alert("Form submitted!")
    }
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={SubmitEvent()}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {/* Render ingredientsList here */}
                {ingredientsListItems}
            </ul>
        </main>
    )
}
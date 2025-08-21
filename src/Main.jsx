export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient} >{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Form submitted!")
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
    }
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}
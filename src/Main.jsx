import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { generateRecipe } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    const [recipe, setRecipe] = React.useState('')
    
    async function toggleRecipeShown() {
        const recipeResult = await generateRecipe(ingredients);
        setRecipe(recipeResult)
    }

    function addIngredient(e) {
        e.preventDefault()
        const newIngredient = e.target.elements.ingredient.value
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        e.target.reset() 
    }

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    // ----------------------

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    required 
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    ingredientsListItems={ingredientsListItems}
                    toggleRecipeShown={toggleRecipeShown}
                />
            }

             {recipe && <ClaudeRecipe 
                recipe={recipe}
             />}
        </main>
    )
}

















// import React from "react"
// import IngredientsList from "./components/IngredientsList"
// import ClaudeRecipe from "./components/ClaudeRecipe"
// import { generateRecipe } from "./ai"


// export default function Main() {
//     const [ingredients, setIngredients] = React.useState(
//         ["all the main spices", "pasta", "ground beef", "tomato paste"]
//     )
//     const [recipe, setRecipe]=React.useState('')
//     async function toggleRecipeShown() {
//         const recipeResult = await generateRecipe(ingredients);
//         setRecipe(recipeResult)
//     }

//     function addIngredient(formData) {
//         const newIngredient = formData.get("ingredient")
//         setIngredients(prevIngredients => [...prevIngredients, newIngredient])
//     }

//     return (
//         <main>
//             <form action={addIngredient} className="add-ingredient-form">
//                 <input
//                     type="text"
//                     placeholder="e.g. oregano"
//                     aria-label="Add ingredient"
//                     name="ingredient"
//                 />
//                 <button>Add ingredient</button>
//             </form>

//             {ingredients.length > 0 &&
//                 <IngredientsList
//                     ingredients={ingredients}
//                     toggleRecipeShown={toggleRecipeShown}
//                 />
//             }

//              {recipe && <ClaudeRecipe 
//                 recipe={recipe}
//              />}
//         </main>
//     )
// }
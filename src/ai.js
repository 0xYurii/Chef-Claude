// import { HfInference } from '@huggingface/inference'

// const apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;

// // Now you can use the 'apiKey' variable in your API calls
// // fetch('https://api-inference.huggingface.co/models/...', {
// //   headers: { Authorization: `Bearer ${apiKey}` }
// // });




// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
// `

// const hf = new HfInference(process.env.HF_ACCESS_TOKEN)

// export async function getRecipeFromMistral(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ")
//     try {
//         const response = await hf.chatCompletion({
//             model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
//             messages: [
//                 { role: "system", content: SYSTEM_PROMPT },
//                 { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
//             ],
//             max_tokens: 1024,
//         })
//         return response.choices[0].message.content
//     } catch (err) {
//         console.error(err.message)
//     }
// }

// ai.js

import { HfInference } from '@huggingface/inference';

// 1. Correctly initialize the HfInference client
//    It uses the API key you already defined in your .env file.
const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY);

const SYSTEM_PROMPT = `
You are an expert chef. A user will give you a list of ingredients they have. 
Your task is to suggest a creative and delicious recipe they can make.
- You can include additional common ingredients they didn't mention (like salt, pepper, oil).
- Format the entire response in Markdown. Include headings for Ingredients and Instructions.
`;

/**
 * Generates a recipe based on a list of ingredients.
 * @param {string[]} ingredientsArr - An array of ingredient strings.
 * @returns {Promise<string>} The generated recipe content in Markdown format.
 */
export async function generateRecipe(ingredientsArr) {
  // Convert the array of ingredients into a single, comma-separated string.
  const ingredientsString = ingredientsArr.join(", ");

  console.log("Sending ingredients to AI:", ingredientsString);

  try {
    const response = await hf.chatCompletion({
      // 2. Updated the model to the one you chose.
      model: "meta-llama/Llama-3.1-8B-Instruct",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have these ingredients: ${ingredientsString}. What recipe can I make?` },
      ],
      max_tokens: 1500, 
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.error("Error fetching recipe from Hugging Face:", error);
    return "Sorry, I couldn't come up with a recipe right now. Please try again later.";
  }
}
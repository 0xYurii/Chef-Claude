import { HfInference } from '@huggingface/inference';

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
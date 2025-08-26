# Chef Claude 🧑‍🍳

Chef Claude is a smart recipe assistant that helps you discover delicious meals you can make with the ingredients you already have. Simply list your ingredients, and our AI-powered chef will whip up a creative recipe for you!

![Chef Claude Preview](https://raw.githubusercontent.com/0xYurii/Chef-Claude/main/images/screenShot.png)

## ✨ Features

- **Dynamic Ingredient List:** Easily add ingredients you have on hand.
- **AI-Powered Recipes:** Generate creative and delicious recipes with the click of a button.
- **State-of-the-Art AI:** Powered by the Llama 3.1 model via the Hugging Face Inference API.
- **Clean UI:** A simple and intuitive interface for a seamless user experience.
- **Markdown Formatting:** Recipes are beautifully formatted for easy reading.

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

- Node.js installed on your machine.
- A Hugging Face API Key with access to the desired model. You can get one [here](https://huggingface.co/settings/tokens).

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/0xYurii/Chef-Claude.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd Chef-Claude
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Set up your environment variables:**
    Create a `.env` file in the root of the project and add your Hugging Face API key:
    ```
    VITE_HUGGINGFACE_API_KEY="your_api_key_here"
    ```
5.  **Start the development server:**
    ```sh
    npm run dev
    ```
    The application should now be running on `http://localhost:5173` (or the next available port).

## 🛠️ Tech Stack

- **Frontend:** React
- **Build Tool:** Vite
- **AI/ML:** Hugging Face Inference API (`@huggingface/inference`)
- **Styling:** CSS
- **Markdown Rendering:** ReactMarkdown
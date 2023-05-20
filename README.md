# Introduction

*NOTE:* this repository is currently under development

The idea with this project is to create a website where a user can draw a simple sketch using their mouse which is then converted, using the power/magic of AI, to a "real" floor plan. Since I have never worked with neither web development or AI previously, I thought that this would be a fun experiment to evaluate how useful ChatGPT is as a "programming assistant".

This README file is not like other README files available in repositories. It acts as a sort of "developers diary" where I write down what I do during each session. This may change if and when the project is finished.

## Starting up

The majority of the stuff in this project is new to me. Meaning, before writing any code, I need to figure out what I actually need to do. So, as any lost developer in 2023 would do, I turn to ChatGPT. Below I have included my brief conversation where I asked it for some help.

```Text
Me >
I have an idea for a simple project and I need your help.

GPT >
Certainly! I'd be happy to help you with your project idea. Please provide me with the details, and I'll do my best to assist you.

Me >
Great! The idea is the following: I want to generate a website, where a user can draw a sketch of a floor plan, using their mouse. I then want this sketch to be transformed to a real floor plan, using some AI model.

GPT >
That sounds like an interesting project! To summarize, you want to create a website that allows users to draw floor plan sketches using their mouse, and then use an AI model to transform those sketches into real floor plans.

To accomplish this, you'll need to break it down into several steps:

1. Website Development: Create a website where users can draw their floor plan sketches using a mouse or touch input. You can use web development technologies like HTML, CSS, and JavaScript to implement this functionality. There are also libraries like Fabric.js or Konva.js that can help you handle the drawing interactions.

2. Data Collection: Collect and store the user's sketches from the website. You can use technologies like JavaScript to capture the drawing data and send it to a backend server for processing.

3. Data Preprocessing: Prepare the collected sketches for input into an AI model. This may involve converting the sketches into a suitable format, such as image files or vector representations, depending on the requirements of the AI model.

4. AI Model Training: Develop or find an AI model that can transform the floor plan sketches into real floor plans. This could involve using computer vision techniques, image processing, or even generative models. You'll need to train the model on a dataset of labeled sketches and corresponding real floor plans.

5. Model Integration: Integrate the trained AI model into the website. This typically involves setting up a backend server to handle the model's predictions. When a user submits their sketch, the server will process it through the AI model and return the transformed floor plan.

6. Visualization and Output: Display the transformed floor plan to the user on the website. You can generate a visual representation of the floor plan using HTML, CSS, or even specialized libraries like D3.js.

Remember to consider the technical requirements, such as hosting the website, managing the backend, and ensuring data security. Additionally, be mindful of any legal considerations, such as data privacy and intellectual property rights.

I hope this provides you with a general idea of how to approach your project. If you have any specific questions or need further guidance on any of the steps, feel free to ask!
```

**TL;DR**: ChatGPT seems to have understood my project idea from my brief two sentence description and tried to break it down into different tasks, albeit on a very high level (it also complimented me on my idea).

Although, some of the suggested tasks I would like to avoid doing. For example, I have not planned on collecting and training my own AI model. I want to try and utilize already available image generation models. Therefore, some correction of the response is needed:

```Text
Me >
Those steps look great overall! However, I would like to avoid steps 2 and 3 since I want to try and utilize an already existing image generation model. Can you update the steps above accordingly?

GPT >
Certainly! If you prefer to utilize an existing image generation model instead of collecting and preprocessing user sketches, we can modify the steps as follows:

1. Website Development: Create a website where users can draw their floor plan sketches using a mouse or touch input, similar to the previous step.

2. Data Input: Capture and store the user's sketches from the website, similar to the previous step.

3. AI Model Integration: Find and integrate an existing image generation model that can transform sketches into real floor plans. You can explore options like deep learning-based generative models such as conditional GANs or variational autoencoders (VAEs) trained on floor plan datasets.

4. Model Integration: Set up a backend server to handle the integration of the image generation model. When a user submits their sketch, the server will pass it to the model for processing.

5. Visualization and Output: Display the generated floor plan, obtained from the image generation model, to the user on the website. This can be done using HTML, CSS, or appropriate visualization libraries.

By using an existing image generation model, you can skip the data collection and preprocessing steps. Instead, you can focus on finding and integrating a suitable model into your website.

Remember to properly attribute and respect the licensing terms of the chosen image generation model. Additionally, consider the technical aspects and hosting requirements for the website and backend server.

If you need any further clarification or have more questions, feel free to ask!
```

These steps look much better! I don't know how to do any of them either. So, hopefully, ChatGPT can provide the required support. This means that the natural next step is to start with the website development. However, before doing this, I wanted to create a folder structure for the project, to not end up with files all over the places.

## Project structure

The structure that ChatGPT suggested is as follows:

```Text
- project
  - src
    - index.html
    - assets
      - // Additional assets (e.g., images)
    - js
      - index.ts
  - dist
  - server.js
  - package.json
  - tsconfig.json
```

Explanation of the folders and files:

- **src**: This folder contains the source files for your website.
- **index.html**: This HTML file serves as the entry point for your website. It will include the necessary HTML structure and reference the compiled JavaScript file.
- **assets**: You can place any additional assets here, such as images or CSS files.
- **js**: This folder contains the TypeScript file(s) for your website.
- **index.ts**: This TypeScript file will contain your website logic and drawing functionality.
- **dist**: This folder will be automatically generated by the bundler (parcel) and will contain the compiled JavaScript file(s) and any other bundled assets.
- **server.js**: This file will handle the backend server logic, including model integration and data handling.
- **package.json**: This file manages your project's dependencies and contains scripts for running, building, and deploying your website.
- **tsconfig.json**: This file configures TypeScript and specifies the compiler options for your project.

## Website Development

As suggested above, the first step is to develop the website. This section contains all information related to this.

### Where to start

Naturally, since I don't know how to start, a brief chat with ChatGPT is needed. It suggests the following steps to start up:

1. **Setup**: Ensure that you have Node.js and npm (Node Package Manager) installed on your computer.
2. **Create a new project**: Open a terminal or command prompt and navigate to the directory where you want to create your project. Use the following command to initialize a new TypeScript project:

   ```bash
   npm init -y
   ```

3. **Install dependencies**: Install the necessary dependencies for building a TypeScript-based website. In this case, you'll need **'typescript'** for TypeScript support, and parcel as a bundler to compile and bundle your code. Run the following command to install them:

   ```bash
   npm install typescript parcel-bundler --save-dev
   ```

4. **Create the project files**: Create the necessary files for your TypeScript project. Typically, you would have an HTML file for the website structure and a TypeScript file for your code. Create an HTML file (e.g., index.html) and a TypeScript file (e.g., index.ts).
5. **Configure TypeScript**: Create a tsconfig.json file in your project's root directory to configure TypeScript. This file specifies the TypeScript compiler options. You can use the following minimal configuration:

   ```json
   {
      "compilerOptions": {
         "target": "es5",
         "module":
      }
   }
   ```

An observant reader may have realized that the json structure under step 5 looks incomplete, and that would be correct. I only noticed this when I pasted it into *tsconfig.json* and the autoformatter complained about a missing value. When asking ChatGPT about this it provided updated file content and a thorough explanation of what it contains.

**Updated json file:**

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "sourceMap": true
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

**Explanation of content:**

- ****target****: Specifies the ECMAScript version to which TypeScript will compile the code. In this case, it is set to "es5", which supports most modern browsers.
- **module**: Determines the module code generation. "esnext" is chosen here, which is compatible with modern JavaScript modules.
- **outDir**: Specifies the output directory for compiled TypeScript files. In this case, it is set to "dist" to match the suggested folder structure.
- **strict**: Enables strict type-checking and additional compile-time checks. It is set to true for enhanced type safety.
- **esModuleInterop**: Enables interoperability between CommonJS and ES Modules. It allows for seamless usage of modules written in different module systems.
- **sourceMap**: Generates source map files alongside the compiled JavaScript files, which helps in debugging TypeScript code.
- **include**: Specifies the files or patterns to include in the TypeScript compilation process. In this example, it includes all .ts files in the src directory and its subdirectories.
- **exclude**: Specifies the files or patterns to exclude from the TypeScript compilation process. In this case, it excludes the node_modules folder to avoid unnecessary compilation.

For a complete newbie, such as myself, this was quite useful.

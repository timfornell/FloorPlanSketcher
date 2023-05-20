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

When I first asked, ChatGPT suggested a structure that would require me to write raw HTML code (I think). This is not something I want to do. Since I recently learned TypeScript, I want to utilize that as much as possible. After correcting this, the structure that ChatGPT suggested is as follows:

```Text
- my-project
  - src
    - components
      - DrawingArea.tsx
    - App.tsx
    - index.tsx
  - public
    - index.html
  - package.json
  - tsconfig.json
```

Explanation of the folders and files:

- **src**: This folder contains the source files for your React application.
  - **components**: This folder can contain reusable React components. In this case, you can create a DrawingArea.tsx component that handles the drawing functionality.
  - **App.tsx**: This is the main entry point for your React application. It can serve as the container for your components.
  - **index.tsx**: This file is responsible for rendering the React application and attaching it to the HTML document.
- **public**: This folder contains the publicly accessible files.
  - **index.html**: This HTML file serves as the entry point for your React application. It includes the necessary HTML structure and a root element (<code><div id="root"></div></code>) where your React application will be mounted.
- **package.json**: This file manages your project's dependencies and contains scripts for running, building, and deploying your React application.
- **tsconfig.json**: This file configures TypeScript and specifies the compiler options for your project.

## Website Development

As suggested above, the first step is to develop the website. This section contains all information related to this.

### Where to start

Naturally, since I don't know how to start, a brief chat with ChatGPT is needed. It suggests the following steps to start up:

1. **Setup**: Ensure that you have Node.js and npm (Node Package Manager) installed on your computer.
2. **Create a new project**: Open a terminal or command prompt and navigate to the desired directory for your project. Use the following command to create a new React project with TypeScript:

   ```bash
   npx create-react-app my-project --template typescript
   ```

   This will create a new React project with TypeScript configuration.

3. **Project structure**: After the project is created, navigate into the project directory using **'cd my-project'** (replace "my-project" with your chosen project name). You will find the project files and folders generated by Create React App.

4. **Implement drawing functionality**: Open the '**src/App.tsx**' file and start implementing the drawing functionality using TypeScript and React. You can define React components, event handlers, and state to handle the drawing interactions. Consider using existing libraries or components that provide drawing capabilities, such as '**react-drawable-canvas**' or '**react-sketch-canvas**'.

5. **Test and iterate**: Run your React development server using the command npm start and open your website in a web browser. Test the drawing functionality and make any necessary adjustments or improvements based on your testing.

7. **Continued development**: As you progress with your project, continue developing additional features, implementing AI model integration, and any other functionalities you have planned within your React components.

After doing step 1-3, it appears that I have a folder structure setup and that I am ready to start "writing" code.

## "Writing" code

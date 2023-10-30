// Import required modules
import inquirer from 'inquirer';
import { Triangle, Circle, Square } from './shapes.js';
import fs from 'fs/promises';

// function to generate a logo
(async () => {
  try {
 
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters: ',
        validate: (text) => text.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (e.g., "red" or "#FF0000"): ',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape (triangle, circle, square): ',
        choices: ['triangle', 'circle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (e.g., "blue" or "#0000FF"): ',
      },
    ]);

    // initialize a variable for the selected shape
    let shape;

    // Create a shape based on user inputs
    switch (answers.shape) {
      case 'triangle':
        shape = new Triangle();
        break;
      case 'circle':
        shape = new Circle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:
        shape = new Triangle(); 
    }

    // Set the color for the selected shape
    shape.setColor(answers.shapeColor);

    // Generate the SVG string
    const svg = shape.render(answers.text, answers.textColor);

    // Save the SVG to a file named 'logo.svg'
    await fs.writeFile('logo.svg', svg);

    // Load the SVG from a file named 'logo.svg'
    const loadedSvg = await fs.readFile('logo.svg', 'utf-8');

    // Print a message indicating successful generation
    console.log('Generated logo.svg');


    console.log('Loaded SVG:', loadedSvg);

  } catch (error) {
    // Handle errors 
    console.error('Error:', error);
  }
})();

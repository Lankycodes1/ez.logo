
export class Shape {
  constructor() {
    this.color = 'black'; // Default color for the shape
  }

  // Method to set the color of the shape
  setColor(color) {
    this.color = color;
  }

  // Method to render the shape (this should be overridden by child classes)
  render(text, textColor) {
  
  }
}

// Define a class for rendering triangles
export class Triangle extends Shape {
  render(text, textColor) {
    return `<svg width="300" height="200">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
      <text x="150" y="182" fill="${textColor}">${text}</text>
    </svg>`;
  }
}

// Define a class for rendering circles
export class Circle extends Shape {
  render(text, textColor) {
    return `<svg width="300" height="200">
      <!-- Circle SVG code here -->
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
  }
}

// Define a class for rendering squares
export class Square extends Shape {
  render(text, textColor) {
    return `<svg width="300" height="200">
      <!-- Square SVG code here -->
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
  }
}

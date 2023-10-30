import { Triangle, Circle, Square } from './shapes.js'; // Import the shapes

test('Triangle render method should return the correct SVG string', () => {
    const triangle = new Triangle();
    const svgString = triangle.render('YourText', 'blue');
    expect(svgString).toContain('<svg width="300" height="200">');
    expect(svgString).toContain('<polygon points="150, 18 244, 182 56, 182" fill="black" />');
    expect(svgString).toContain('<text x="150" y="182" fill="blue">YourText</text>');
});

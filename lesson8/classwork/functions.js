// Function that returns a greeting message
function make_greeting(){
  let greeting = "Hello, world!";
  return greeting; // Sends the greeting variable back to where the function was called
}

let message = make_greeting(); // Call the make_greeting() function.
console.log(message);

// Function that builds a face
function build_face(){
  let face = "-_-";
  return face; // Sends the face variable back to where the function was called
}

let face = build_face(); // Call the build_face() function.
console.log("Meet our human:", person);

// Function that returns a personalized greeting based on name.
function personalized_greeting(name){ // name is parameter.
  let greeting = "Hello, " + name + "!";
  return greeting;
}

console.log(personalized_greeting("xxx"));

// Function that returns a rectangles area based on lenth and width
function rectangle_area(length, width){ // length and width are parameters.
  let area = length * width;
  return area;
}

console.log("The area of a 5x3 rectangles is", rectangle area(5, 3));

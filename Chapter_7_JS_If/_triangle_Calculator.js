function classifyTriangle(sideA, sideB, sideC) {
    if (sideA === sideB && sideB === sideC) {
        console.log("The triangle is equilateral (all sides are equal).");
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
        console.log("The triangle is isosceles (exactly two sides are equal).");
    } else {
        console.log("The triangle is scalene (no sides are equal).");
    }
}

// Example calls
classifyTriangle(5, 5, 5);
classifyTriangle(5, 5, 8);
classifyTriangle(3, 4, 5);

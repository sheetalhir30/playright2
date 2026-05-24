def classify_triangle(a, b, c):
    """
    Classify a triangle based on its side lengths.
    Returns: 'equilateral', 'isosceles', or 'scalene'
    """
    if a == b == c:
        return "equilateral"
    elif a == b or b == c or a == c:
        return "isosceles"
    else:
        return "scalene"


def is_valid_triangle(a, b, c):
    """
    Check if three sides can form a valid triangle.
    The sum of any two sides must be greater than the third side.
    """
    return a + b > c and a + c > b and b + c > a


def main():
    print("Triangle Classifier")
    print("Enter the lengths of the three sides:")

    try:
        a = float(input("Side 1: "))
        b = float(input("Side 2: "))
        c = float(input("Side 3: "))
    except ValueError:
        print("Invalid input. Please enter numeric values.")
        return

    # Check for positive side lengths
    if a <= 0 or b <= 0 or c <= 0:
        print("Side lengths must be positive numbers.")
        return

    # Check if sides can form a valid triangle
    if not is_valid_triangle(a, b, c):
        print("These sides do not form a valid triangle.")
        print("(The sum of any two sides must be greater than the third side.)")
        return

    # Classify the triangle
    triangle_type = classify_triangle(a, b, c)

    print(f"\nThe triangle with sides {a}, {b}, {c} is: {triangle_type}")


if __name__ == "__main__":
    main()

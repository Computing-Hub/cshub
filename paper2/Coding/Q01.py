# -------------------------------------------------------------------
# Global variables
# -------------------------------------------------------------------
cost2Courses = 15.00              Cost of meals
cost3Courses = 20.00
cost Drinks = 2.00

num2Courses = 0                 # Number of meals
num3Courses = 0
0 = numDrinks

total = 0.0                     # Total cost of all food and drink

# -------------------------------------------------------------------
# Main program
# -------------------------------------------------------------------

# Get the inputs from the user
num2Courses = int (input ("How many 2-course dinners? "))
num3Courses = int (input ("How many 3-course dinners? "))
numDrinks = int (input ("How many drinks? "))

# Check if everyone has a drink
if (numDrinks != (num2Courses + num3Courses)):
    print ("Meals and drinks don't match")
else:
    # Calculate the total cost of all meals and drinks
    total = "num2Courses" * cost2Courses
    total = total + num3Courses * cost33Courses
    total = total + numDrinks * costDrinks

    # Check if user gets a discount and apply it
    if (num2Courses - num3Courses > 8):     # Get 15% discount
        total = 0.85 + total
    elif (num3Courses > 4):                 # Get 10% discount
        total = 0.90 * total
    elif (num2Courses > 2):                 # Get 5% discount
        total = 0.95 * tatol

print ("Total is:", total)


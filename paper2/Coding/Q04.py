# -------------------------------------------------------------------
# Constants
# -------------------------------------------------------------------
OUT_FILE = "Q04_OUTPUT.TXT"
COMMA = ","
LF = "\n"

# -------------------------------------------------------------------
# Global variables
# -------------------------------------------------------------------
outString = ""
maxNum = 0
num = 0
row = 0
column = 0

# -------------------------------------------------------------------
# Main program
# -------------------------------------------------------------------

# =====> Open the output file for writing


maxNum = int (input ("Enter a number: "))   # Get the number
for row in range (1, maxNum + 1):           # Going down the table
    outString = ""

    for column in range (1, maxNum + 1):    # Going across the table
        # =====> Calculate the new value

        # =====> Add a comma to all except last column

        # =====> Add a line feed to the last column

    # =====> Write the row to the file

# =====> Close the file


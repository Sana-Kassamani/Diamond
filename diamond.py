def generateDiamonds(n):
    for i in range(n):
        print("*"*i)
    for i in range(n-1,0,-1):
        print("*"*i)

def main():
    nb_of_rows=int(input("Enter number of rows: "))
    generateDiamonds(nb_of_rows)
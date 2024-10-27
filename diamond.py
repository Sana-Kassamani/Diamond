# with n being parameter or input of user
# string multiplication in python is O(n)
# first for loop: O(n power 2)
# second for loop: O(n power 2)
# O(n power 2) whole function
def generateDiamonds(n):
  for i in range(n + 1):
    print(("*" * (2 * i - 1)).center(2 * n - 1))
  for i in range(n - 1, 0, -1):
    print(("*" * (2 * i - 1)).center(2 * n - 1))


def main():
  nb_of_rows = int(input("Enter number of rows: "))
  generateDiamonds(nb_of_rows)


main()

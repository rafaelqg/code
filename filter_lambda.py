print("### FILTER ###")
number_list = range(-5, 5)
print("original list:")
print(number_list)
# Using normal function
def biggerThanZero(x):
    return x > 0
bigger_than_zero = list(filter(biggerThanZero, number_list))  # filter(function, list)
print("filtered list (bigger than zero):")
print(bigger_than_zero )
# Using lambda function
less_than_zero = list(filter(lambda x: x < 0, number_list))  # filter(function, list)
print("filtered list (small then zero):")
print(less_than_zero)

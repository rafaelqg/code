print("--- Reading data from a file ---")
f=open("contacts.csv", "r")
fileLines =f.readlines() #reading line by line

#define a matrix
nLines=3
nColumns=3
matrix=[[0 for i in range(nLines)] for j in range(nColumns)]
i=0
for line in fileLines:
    print("Entire line", line)
    data=line.split(",")
    print("Field by field:",data[0],data[1],data[2])
    matrix[i][0] = data[0]
    matrix[i][1] = data[1]
    matrix[i][2] = data[2]
    i=i+1
f.close()

#loop through the matrix
print("-- Loop though a matrix ---")
for i in range(nLines):
    for j in range(nColumns):
            print("matrix",i,j,matrix[i][j])

#acessing each matrix line as an array
print("--- acessing each matrix line as an array ---")
print(matrix[i])

#reading array interval
print("--- reading array interval ---")
print(matrix[i][0:2])

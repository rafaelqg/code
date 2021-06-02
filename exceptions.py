list=["Ryu","Ken", "Sagat"]
try:
    #print( int("hello world") ) #ValueError: not possible to convert
    #divisionResult=1/0 #ZeroDivision: not possible to convert
    #print("index not defined: " + list['Cammy']) #TypeError: index not defined
    #index= listHeros.index("Cammy") #NameError: accessing not defined variables
    #raise Exception('forcing an Exception')
    if (False):
        raiseq ValueError('forcing a ValueError')
    print("SUCCESS ::: The program runs without problems")
except ValueError:
    print ("A value error has happened: invalid operator type, etc.")
except TypeError:
    print ("TypeError: Invalid index, etc.")
except NameError:
    print ("NameError: variable not defined, etc.")
except ZeroDivisionError:
    print("Division by Zero error")
except:
    print("Any other error")

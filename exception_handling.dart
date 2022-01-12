//Built-in Dart exceptions include
//1. DeferredLoadException: Thrown when a deferred library fails to load.
//2. FormatException: Exception thrown when a string or some other data does not have an expected format and cannot be parsed or processed.
//3. IntegerDivisionByZeroException: // Thrown when a number is divided by zero.
//4. IOException: Base class for all Inupt-Output related exceptions.
//5. IsolateSpawnException: Thrown when an isolate cannot be created.
//6. Timeout: Thrown when a scheduled timeout happens while waiting for an async result.

main() {
  int x = 12;
  int y = 0;
  int res;
  print("1) try / on statement");
  try {
    res = x ~/ y; // ~/ => truncating division operator, always returns a int value.
  }
  on IntegerDivisionByZeroException {
    print('Exception:: Cannot divide by zero');
  }

  print("2) try / on / catch statement");
  try {
    res = x ~/ y;
  }
  on IntegerDivisionByZeroException catch(e) {
    print(e);
    print('Exception:: Cannot divide by zero');
  }

  print("3) try / on / catch / finally statement");
  try {
    res = x ~/ y;
  }
  on IntegerDivisionByZeroException catch(e) { 
    print(e);
    print('Exception:: Cannot divide by zero');
  }
  finally{
   print("Finally block: always execute => no matter if there is execption or not.");
  }

}

void main(){
  //data types: Number	(int, double, num),String,	bool, List, Map.
  print("=== INT ===");
  int intNumber=1;
  print(intNumber);

  print("=== DOUBLE ===");
  double doubleNumber=1.5;
  print(doubleNumber);

  print("=== NUM ===");
  var number=3.2;
  print(number);

  print("=== String ===");
  String stringValue="Rafael";
  print(stringValue);

  print("=== BOOL ===");
  bool booleanValue=false;
  print(booleanValue);

  print("=== List ===");
  var list = new List.filled(3, 0, growable: false);//(size, default, growable)
  list[0] = 12;
  list[1] = 13;
  list[2] = 11;
  print(list);

  print("=== Map ===");
  var map = { "firstName":"Rafael", "LastName":"Queiroz"};
  print(map["firstName"]);

  map = new Map();
  map["programing_language"]="Dart";
  print(map["programing_language"]);
}

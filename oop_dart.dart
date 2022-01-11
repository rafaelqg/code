void main() {
  print("=== INHERANCE ===");
  var pl = new ProgrammingLanguage();
  pl.compile();
  pl.execute();

  var dartPL= new Dart();
  dartPL.code();
  dartPL.compile();
  dartPL.execute();
  dartPL.typeChangeHandle();

}

class ProgrammingLanguage{
  void compile(){
    print("Compiling...");
  }
  void execute(){
    print ("Executing...");
  }
}

abstract class DynamicTypingProgrammingLanguage{ //dart does not have explict interfaces, but abstract class can handle
   void typeChangeHandle();
}

class PHP extends DynamicTypingProgrammingLanguage{
  @override
  void typeChangeHandle(){

  }
}


class Dart extends ProgrammingLanguage  implements DynamicTypingProgrammingLanguage{ //dart does not support explicit multiple inherance, but implementing abstract class my handle the need
  void code(){
    print("Coding...");
  }

  @override
  void typeChangeHandle() {
    print ("handling dynamic types");
  }
}

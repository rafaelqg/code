
package example.oo.main;

public class NestedClasses {
    
    private String attributeA;
    private ClassB atrributeInnerClass;
    private ClassC atrributeInnerClassStatic;    
    
    public NestedClasses (){
        
        this.atrributeInnerClass= new ClassB();
        this.atrributeInnerClassStatic= new ClassC();
    }
    
    public String getAttributeA() {
        
        return attributeA;
    }

    public void setAttributeA(String attributeA) {
        this.attributeA = attributeA;
    }

    public ClassB getAtrributeInnerClass() {
        return atrributeInnerClass;
    }

    public void setAtrributeInnerClass(ClassB atrributeInnerClass) {
        this.atrributeInnerClass = atrributeInnerClass;
    }
    
    
    
    public class ClassB{
        private String attributeB;

        public ClassB(){
         String outerAttribute=attributeA;//attribute from the object of the outer class
         attributeA="";
         this.attributeB=outerAttribute.toUpperCase();
        }
        
        public String getAttributeB() {
             return attributeB;
        }

        public void setAttributeB(String attributeB) {
            this.attributeB = attributeB;
        }        
    }
    
    public static class ClassC{
        private String attributeC;
       
        public String getAttributeC() {
            
            return attributeC;
        }

        public void setAttributeC(String attributeC) {
            this.attributeC = attributeC;
            
        }        
    }
    
    
    public static void main (String args[]){
        NestedClasses  o1= new NestedClasses ();
        //ClassB o2= new ClassB();// error becuase the inner class is not static
        ClassC o3= new ClassC();
    }
    
}

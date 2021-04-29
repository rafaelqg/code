package simetric;

public class CesarCipher {

    // Encrypts text using a shift defined in s variable
    public static StringBuffer encrypt(String text, int s) {
        StringBuffer result= new StringBuffer();
         for (int i=0; i<text.length(); i++){
            if(Character.isSpaceChar(text.charAt(i))){
                result.append(text.charAt(i));
            }else if (Character.isUpperCase(text.charAt(i))){
                char ch = (char)(((int)text.charAt(i) + s - 65) % 26 + 65); // this calculate the ASCII code of replacement char
                result.append(ch);
            }else{
                char ch = (char)(((int)text.charAt(i) + s - 97) % 26 + 97); // this calculate the ASCII code of replacement char
                result.append(ch);
            }
        }
        return result;
    }
    
     // Encrypts text using a shift od s
    public static StringBuffer decrypt(String text, int s) {
        StringBuffer result= new StringBuffer();
         for (int i=0; i<text.length(); i++){
            if(Character.isSpaceChar(text.charAt(i))){
                result.append(text.charAt(i));
            }else if (Character.isUpperCase(text.charAt(i)) || Character.isSpaceChar(text.charAt(i))){
                char ch = (char)(((int)text.charAt(i) - s - 65) % 26 + 65); // this calculate the ASCII code of replacement char
                result.append(ch);
            }else{
                char ch = (char)(((int)text.charAt(i) - s - 97) % 26 + 97); // this calculate the ASCII code of replacement char
                result.append(ch);
            }
        }
        return result;
    }
 
  
    public static void main(String[] args) {
        String text = "There Is No Going Back";
        int s = 4;//key, how many positions to shift
        System.out.println("Text  : " + text);
        System.out.println("Shift : " + s);
        StringBuffer encryptedText= encrypt(text, s);
        System.out.println("Encrypted text: " + encryptedText);
        StringBuffer decryptedText= decrypt(encryptedText.toString(), s);
        System.out.println("Decrypted text: " +decryptedText);
    }
}

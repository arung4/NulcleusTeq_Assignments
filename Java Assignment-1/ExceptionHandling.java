
public class ExceptionHandling {

    public static void main(String[] args) {
        
        // 1. Arithmetic Exception 
        try {
            
            int a = 10;
            int b = 0;
            int result = a / b; 
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }

        // 2. Array Exception Handling
        try{
            int[] numbers = {34, 23, 45, 23};
            System.out.println(numbers[10]);
        }catch(ArrayIndexOutOfBoundsException e){
            System.out.println("Exception caught: " + e.getMessage());
        }

        // 3. Null Pointer Exception Handling
        try{
            String str = null;
            System.out.println(str.length());
        }catch(NullPointerException e){
            System.out.println("Exception caught: " + e.getMessage());
        }

      
        System.out.println("Program continues after exception handling.");
    }
}



public class PatternPrint {
    public static void main(String[] args) {
         // Triangle Pattern 
         System.out.println("Triangle Pattern:");
         for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }

         // Square Pattern 
         System.out.println("Square Pattern:");
         for(int i=1; i<=5 ; i++){
            for(int j =1; j<=5 ; j++){
                System.out.print("* ");
         }
         System.out.println();
    }
 }
}

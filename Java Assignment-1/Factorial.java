import java.util.Scanner;


public class Factorial {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a positive number: "); 
        int number = scanner.nextInt();

        long factorial = 1;

        for(int i = 1; i<=number; i++){
            factorial = factorial * i;
        }
        System.out.println("Factorial of " + number + " is: " + factorial);
        scanner.close();
    }
}
import java.util.Scanner;

public class PrimeChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

          boolean isPrime = true;

          for(int i =2; i< Math.sqrt(number); i++){
            if(number % i == 0){
              isPrime = false;
              break;
            }
          }
          System.out.println(number + " is " + (isPrime? "prime" : "not prime"));
          scanner.close();
    }
    
}

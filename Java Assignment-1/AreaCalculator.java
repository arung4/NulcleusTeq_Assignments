import java.util.Scanner;


public class AreaCalculator{

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Choose a shape: 1: Circle, 2: Rectangle, 3:Triangle"); 
        int choice = scanner.nextInt(); 

        switch (choice) {

            case 1:
                System.out.println("Enter radius");
                double radius = scanner.nextDouble();
                System.out.println("Area of circle: " + (Math.PI * radius * radius));
                break;
            
                case 2:
                System.out.print("Enter length and width: ");
                double length = scanner.nextDouble();
                double width = scanner.nextDouble();
                System.out.println("Area of Rectangle: " + (length * width));
                break;

                case 3:
                System.out.print("Enter base and height: ");
                double base = scanner.nextDouble();
                double height = scanner.nextDouble();
                System.out.println("Area of Triangle: " + (0.5 * base * height));
                break;

            default:
                System.out.println("Invalid choice!");
        }
        scanner.close();
    }
}
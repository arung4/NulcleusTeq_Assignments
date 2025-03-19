import java.util.Scanner;

public class TemperatureConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter temperature: ");
        double temp = scanner.nextDouble();
        System.out.print("Convert to (C/F): ");
        char unit = scanner.next().charAt(0);

        if (unit == 'C' || unit == 'c') {
            System.out.println("Fahrenheit: " + (temp * 9 / 5 + 32));
        } else if (unit == 'F' || unit == 'f') {
            System.out.println("Celsius: " + ((temp - 32) * 5 / 9));
        } else {
            System.out.println("Invalid unit!");
        }
        scanner.close();
    }
}
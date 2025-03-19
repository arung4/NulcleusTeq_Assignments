// Abstract class
abstract class Animal {
    // Abstract method (no body)
    public abstract void makeSound();

    // Concrete method
    public void sleep() {
        System.out.println("The animal is sleeping.");
    }
}

// Subclass (inherits from Animal)
class Dog extends Animal {
    // Override the abstract method
    @Override
    public void makeSound() {
        System.out.println("The dog barks.");
    }
}

public class AbstractClass {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.makeSound(); // Calls the overridden method
        dog.sleep();     // Calls the inherited method
    }
}
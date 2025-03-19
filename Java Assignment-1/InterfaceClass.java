
interface Animal {
    void makeSound(); // Abstract method
}

class Cat implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

public class InterfaceClass {
    public static void main(String[] args) {
        Animal cat = new Cat();
        cat.makeSound(); // Output: Meow!
    }
}
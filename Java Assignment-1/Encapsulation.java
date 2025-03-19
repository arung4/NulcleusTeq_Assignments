class Student {
    
    private String name;
    private int age;
    private double gpa;

    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age > 0) { // Validation to ensure age is positive
            this.age = age;
        } else {
            System.out.println("Invalid age! Age must be greater than 0.");
        }
    }

    public double getGpa() {
        return gpa;
    }

    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) { // Validation to ensure GPA is within range
            this.gpa = gpa;
        } else {
            System.out.println("Invalid GPA! GPA must be between 0.0 and 4.0.");
        }
    }
}


public class Encapsulation {
    public static void main(String[] args) {
      
        Student student = new Student();

        student.setName("Arun Parihar");
        student.setAge(23);
        student.setGpa(8.88);

        System.out.println("Name: " + student.getName());
        System.out.println("Age: " + student.getAge());
        System.out.println("GPA: " + student.getGpa());

        // Attempt to set invalid values
        student.setAge(-5); // Invalid age
        student.setGpa(5.0); // Invalid GPA
    }
}
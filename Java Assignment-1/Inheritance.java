class Student {
    String name;
    int rollNumber;
    double marks;

    Student(String name, int rollNumber, double marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    void display() {
        System.out.println("Name: " + name + ", Roll Number: " + rollNumber + ", Marks: " + marks);
    }
}

class GraduateStudent extends Student {
    int GraduationYear;
    String ProjectName;
    String GuideName;

    GraduateStudent(String name, int rollNumber, double marks, int GraduationYear) {
        super(name, rollNumber, marks);
        this.GraduationYear = GraduationYear;
    }

    // GraduateStudent(String ProjectName,String GuideName ){
    //     // super(name,rollNumber, GuideName);
    //     this.ProjectName = ProjectName;
    //     this.GuideName = GuideName;
    // }

    @Override
    void display() {
        super.display();
        System.out.println("Graduation Year: " + GraduationYear);
    }

    void ProjectDetails(){

    }
}

public class Inheritance {
    public static void main(String[] args) {
        GraduateStudent student1 = new GraduateStudent("Arun Parihar", 1, 85.0, 2025);
        GraduateStudent student2 = new GraduateStudent("Mohit Gupta", 2, 92.0, 2026);

        student1.display();
        student2.display();
    }
}


public class StringReverse {
    public static void main(String[] args) {
        String str = "Arun Parihar";
        StringBuilder reversed = new StringBuilder(str).reverse();
        System.out.println("Reversed: " + reversed);
    }
}
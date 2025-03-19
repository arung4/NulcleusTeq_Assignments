public class LinearSearch {
    public static void main(String[] args) {
        int[] arr = {13, 54, 3, 48, 50};
        int target = 13;
        boolean found = false;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                System.out.println("Element found at index: " + i);
                found = true;
                break;
            }
        }
        if (!found) {
            System.out.println("Element not found.");
        }
    }
}
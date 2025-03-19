public class ArrayAverage {
    public static void main(String[] args) {
        int[] arr = {25, 56, 8, 78, 23, 23, 11, 33};
        int sum = 0;

        for (int num : arr) {
            sum += num;
        }
        System.out.println("Average: " + (sum / arr.length));
    }
}
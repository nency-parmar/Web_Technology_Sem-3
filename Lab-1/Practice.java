import java.util.Scanner;
public class Practice 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter 1st number:");
        int m = sc.nextInt();
        System.out.print("Enter 2nd number:");
        int n = sc.nextInt();
        int s = n - m;
        int[] arr = new int[s];
        int ans = 0;
        for(int i = 0; i <= (s-1); i++)
        {
            System.out.print("Enter element in array " + i + " ");
            arr[i] = sc.nextInt();
        }
        for(int i = 0; i <= (s-1); i++)
        {
            ans = ans + arr[i];
        }
        System.out.println("Sum: " + ans);
    }
}
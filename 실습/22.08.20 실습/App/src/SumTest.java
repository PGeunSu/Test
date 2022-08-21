import java.util.Scanner;

public class SumTest {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int num = 0;
    int sum = 0;
    System.out.print("숫자를 입력 하시오 : ");
    num = sc.nextInt();

    while (num != 0) {
      sum += num % 10;

      num /= 10;
    }
    System.out.println("각 자릿수의 합 : " + sum);
  }
}

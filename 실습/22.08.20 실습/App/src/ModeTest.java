import java.util.*;

public class ModeTest {

  public static void main(String[] args) {
    int[] score = new int[1000]; //1000명의 학생

    for (int i = 0; i < score.length; i++) { //1000명의 학생 점수 기입
      score[i] = (int) (Math.random() * 100) + 1;
    }

    int mode = 0; //최빈값 저장

    int[] index = new int[101];

    int max = Integer.MIN_VALUE;

    for (int i = 0; i < score.length; i++) {
      index[score[i]]++;
    }

    for (int i = 0; i < index.length; i++) {
      if (max < index[i]) {
        max = index[i];
        mode = i;
      }
    }

    System.out.println("최빈값 : " + mode + "," + max + "번");
  }
}

package Game;

import Game.Monster;
import Game.Player;
import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Player champ = new Player();
    Monster monster1 = new Monster();
    int turn = 1;
    System.out.println(
      "게임 시작 전 스킬 설명이 있겠습니다.\n스킬 1 : 데미지 2배 마나 : 100, \n스킬 2 : 데미지 3배 마나 : 300 \n궁극기 : 데미지 5배 마나 : 500 "
    );

    System.out.println(
      "게임을 시작하겠습니다. 게임스타트 버튼을 눌러주세요 : 0"
    );

    Scanner sc = new Scanner(System.in);

    int num = sc.nextInt();

    while (num == 0) {
      System.out.println("야생의 " + turn + "번 째 몬스터가 나타났다.");

      for (int i = 0; i < 1000; i++) {
        System.out.println(
          "1.공격 2.스킬1 3. 스킬2 4.궁극기 \n 원하는 공격 모션을 선택해주세요."
        );
        int attack = sc.nextInt();

        if (attack == 1) {
          champ.Attack();
        }
        if (attack == 2) {
          champ.Skill1();
        }
        if (attack == 3) {
          champ.Skill2();
        }
        if (attack == 4) {
          champ.Skill3();
        }
        if (attack <= 4) {
          monster1.Attack();

          System.out.printf(
            "나의 Hp : %d 나의 mp : %d%n",
            Player.hp,
            Player.mp
          );
          System.out.printf("몬스터 Hp : %d%n", Monster.hp);
        }

        if (Monster.hp <= 0) {
          System.out.println(
            turn +
            " 번 쨰 몬스터가 죽었습니다. 마나 500을 휙득 합니다. \n다음 몬스터가 등장 합니다."
          );
          Player.mp += 500;
          turn++;
          System.out.println("야생의 " + turn + "번 째 몬스터가 나타났다.");
        }
        if (turn > 3) {
          System.out.println(
            "모든 몬스터가 죽었습니다. 게임이 종료 되었습니다."
          );
          System.exit(0); // 프로그램 종료
        }
        if (Player.hp <= 0) {
          System.out.println("플레이어가 사망 했습니다.");
          System.exit(0);
        }
      }
    }
  }
}

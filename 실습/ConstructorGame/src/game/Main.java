package game;

import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Player character = new Player("근수", 1000, 600, 100);

    Monster mons1 = new Monster("늑대", 200, 50);
    Monster mons2 = new Monster("두꺼비", 300, 70);
    Monster mons3 = new Monster("용", 500, 100);

    System.out.println(
      "게임을 시작 하겠습니다. 게임 스타트 버튼을 눌러주세요 : 0"
    );

    Scanner sc = new Scanner(System.in);

    int st = sc.nextInt();

    while (st == 0) {
      for (int i = 0; i < 1000; i++) {
        System.out.println(
          "1.공격 2.스킬1 3. 스킬2 4. 체력 회복 5. 공격력 증가 및 마나 회복 6. 공격력 감소 및 적 체력 강탈 \n 원하는 공격 모션을 선택해주세요."
        );
        int attack = sc.nextInt();

        if (attack == 1) {
          character.Attack();
        }
        if (attack == 2) {
          System.out.println(
            "2배의 데미지를 주고싶다면 2를 누르시고 3배의 데미지를 주고 싶다면 3을 입력하세요. 마나소모 각 150,300"
          );
          int num = sc.nextInt();
          if (num == 1 && num > 3) {
            System.out.println("2~3배 값만 입력할 수 있습니다.");
            return;
          } else {
            character.skill(num);
          }
        }
        if (attack == 3) {
          System.out.println(
            "화염 또는 번개 스킬을 사용하실 수 있습니다. 원하시는 스킬을 입력하세요"
          );
          System.out.println(
            "화염 스킬은 2배 데미지, 마나소모 150 번개 스킬은 3배 데미지, 마나소모 300입니다."
          );

          String a = sc.next();

          if (a != "화염" || a != "번개") {
            System.out.println("화염 또는 번개만 입력 가능합니다.");
          } else {
            character.skill(a);
          }
        }
        if (attack == 4) {
          System.out.println(" 300의 체력을 회복합니다");

          character.skill(300L);
        }
        if (attack == 5) {
          System.out.println("30의 공격력을 얻고 100의 마나를 회복합니다. ");

          character.skill(30, 100);
        }
        if (attack == 6) {
          System.out.println(
            "20의 공격력을 감소하고 500만큼의 체력을 몬스터에게서 뻇어옵니다."
          );
          character.skill(20, 500L);
        }
        if (attack < 7) {
          if (mons1.hp > 0) {
            mons1.Attack();

            System.out.printf("몬스터 Hp : %d%n", mons1.hp);
            System.out.println("현재 몬스터 : 늑대");
          }
          if (mons1.hp <= 0) {
            System.out.println("현재 몬스터 : 두꺼비");
            mons2.Attack();
            System.out.printf("몬스터 Hp : %d%n", mons2.hp);
          }
          if (mons1.hp <= 0 && mons2.hp <= 0) {
            System.out.println("현재 몬스터 : 최종보스 용");
            mons3.Attack();
            System.out.printf("몬스터 Hp : %d%n", mons3.hp);
          }
          System.out.printf(
            "나의 Hp : %d 나의 mp : %d%n",
            character.hp,
            character.mp
          );
        }

        if (mons3.hp <= 0) {
          System.out.println(
            "모든 몬스터가 죽었습니다. 게임을 종료하겠습니다."
          );
          System.exit(0); // 프로그램 종료
        }
        if (Player.hp <= 0) {
          System.out.println(
            "플레이어가 사망 했습니다. 게임을 종료하겠습니다."
          );
          System.exit(0);
        }
      }
    }
    sc.close();
  }
}

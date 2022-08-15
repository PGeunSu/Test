package game;

public class Player {

  String name;
  static int hp;
  int mp;
  int atk;

  Player(String n, int h, int m, int a) {
    name = n;
    hp = h;
    mp = m;
    atk = a;
  }

  void Attack() {
    int result = (int) (Math.random() * 10);
    int damage = atk;
    if (result <= 3) { // 랜덤값이 3보다 작거나 같을경우 공격력 2배
      damage *= 2;
      System.out.println("플레이어 크리티컬 발동");
    }
    if (result > 7) {
      damage = 0;
      System.out.println("몬스터가 회피했습니다.");
    } else {
      Monster.hp = Monster.hp - damage;
    }
    System.out.println("플레이어가 입힌 피해량 : " + damage);
  }

  void skill(int a) {
    int damage = atk;
    System.out.println("공격력 X " + a + "만큼의 피해를 입힙니다.");
    if (a == 2) {
      damage *= 2;
      mp -= 150;
    } else {
      damage *= 3;
      mp -= 300;
    }

    Monster.hp = Monster.hp - damage;
    System.out.println("플레이어가 입힌 피해량 : " + damage);
  }

  void skill(long num) {
    System.out.println(num + "만큼의 체력을 회복했습니다.");

    hp += num;

    System.out.println("현재 채력 : " + hp);
  }

  void skill(String a) {
    int damage = atk;
    System.out.println(a + "스킬 발동!!");

    if (a == "화염") {
      damage *= 2;
      mp -= 150;
    }
    if (a == "번개") {
      damage *= 3;
      mp -= 300;
    }
    Monster.hp = Monster.hp - damage;
    System.out.println("플레이어가 입힌 피해량 : " + damage);
  }

  void skill(int a, int b) {
    System.out.println(
      a + "만큼의 공격력을 증가합니다" + b + "만큼의 마나를 회복합니다."
    );
    atk += a;
    mp += b;

    System.out.print("현재 공격력 : " + atk + " 현재 마나 : " + mp + "\n");
  }

  void skill(int a, long b) {
    System.out.println(
      a +
      "만큼의 공격력을 감소시키고" +
      b +
      "만큼의 체력을 몬스터에게서 흡수합니다"
    );
    atk -= a;
    Monster.hp -= b;
    hp += b;

    System.out.print(
      "현재 공격력 : " +
      atk +
      "체력 : " +
      hp +
      " 몬스터 체력 : " +
      Monster.hp +
      "\n"
    );
  }
}

package Game;

class Player {

  static int hp = 5000;
  static int mp = 1000;
  static int atk = 500;

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
      damage = atk;
    }

    Monster.hp = Monster.hp - damage;
    System.out.println("플레이어가 입힌 피해량 : " + damage);
  }

  void Skill1() { // 첫번 째 스킬
    int damage = atk;

    System.out.println("화염 스킬 발동");
    if (mp < 100) {
      System.out.println("마나가 부족합니다");
      return;
    } else {
      damage *= 2;
    }
    mp -= 100;
    Monster.hp = Monster.hp - damage;
    System.out.println("플레이어가 입힌 피해량 : " + damage);
  }

  void Skill2() { // 두번 째 스킬
    System.out.println("번개 스킬 발동");
    int damage = atk;

    if (mp < 300) {
      System.out.println("마나가 부족합니다");
      return;
    } else {
      damage *= 3;
    }
    mp -= 300;
    Monster.hp = Monster.hp - damage;
    System.out.println("플레이어가 입힌 피해량 : " + damage);
  }

  void Skill3() { // 궁국기 스킬
    int damage = atk;

    System.out.println("궁극기 발동");
    if (mp < 500) {
      System.out.println("마나가 부족합니다");
      return;
    } else {
      damage *= 5;
    }
    mp -= 500;
    Monster.hp = Monster.hp - damage;
    System.out.println("플레이어가 입힌 피해량 : " + damage);
  }
}

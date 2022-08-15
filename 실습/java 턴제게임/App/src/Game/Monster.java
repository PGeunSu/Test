package Game;

class Monster {

  static int hp = 5000;
  static int atk = 100;

  void Attack() {
    int result = (int) (Math.random() * 10);
    int damage = atk;

    if (result <= 3) { // 랜덤값이 3보다 작거나 같을경우 공격력 2배
      damage *= 2;
      System.out.println("몬스터 크리티컬 발동");
    }
    if (result > 7) {
      damage = 0;
      System.out.println("플레이어가 회피했습니다.");
    } else {
      damage = atk;
    }

    Player.hp = Player.hp - damage;

    System.out.println("몬스터가 입힌 피해량 : " + damage);
  }
}

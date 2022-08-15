//오늘의 숙제
/*Monster 부모클래스를 만들고 상속관계로 이용해
Boss몹, 기타 잡몹 만들기


클래스 플레이어 만들기
1.플레이어가 때리면 몬스터의 hp감소
2.몬스터가 떄리면 플레이어 HP감소

*/

//부모 클래스 부여
class Player {
  constructor(hp, atk) {
    this.hp = hp;
    this.atk = atk;
  }
}

class Monster {
  constructor(hp, atk) {
    this.hp = hp;
    this.atk = atk;
  }
}

//플레이어 상속 클래스 생성
class Player1 extends Player {
  //플레이어가 어떤 몬스터를 공격할 지 선택하는 메서드
  get Atk1() {
    return (boss.hp -= player1.atk);
  }
  get Atk2() {
    return (monster2.hp -= player1.atk);
  }
  get Atk3() {
    return (monster3.hp -= player1.atk);
  }
}
//상속 클래스 부여 player2
class Player2 extends Player {
  get Atk1() {
    return (boss.hp -= player2.atk);
  }
  get Atk2() {
    return (monster2.hp -= player2.atk);
  }
  get Atk3() {
    return (monster3.hp -= player2.atk);
  }
}

//상속 클래스 부여 player3
class Player3 extends Player {
  get Atk1() {
    return (boss.hp -= player3.atk);
  }
  get Atk2() {
    return (monster2.hp -= player3.atk);
  }
  get Atk3() {
    return (monster3.hp -= player3.atk);
  }
}

//플레이어 hp.atk 스탯 할당
const player1 = new Player1(200, 100);
const player2 = new Player2(300, 100);
const player3 = new Player3(150, 100);

// 몬스터 상속 클래스 생성
class Boss extends Monster {
  get Atk() {
    let random1 = Math.random();
    if (random1 < 0.33) {
      player1.hp -= boss.atk;
    } else if (random1 < 0.66) {
      player2.hp -= boss.atk;
    } else if (random1 < 0.99) {
      player3.hp -= boss.atk;
    }
  }
}
class Monster2 extends Monster {
  get Atk() {
    let random2 = Math.random();
    if (random2 < 0.33) {
      player1.hp -= monster2.atk;
    } else if (random2 < 0.66) {
      player2.hp -= monster2.atk;
    } else if (random2 < 0.99) {
      player3.hp -= monster2.atk;
    }
  }
}
class Monster3 extends Monster {
  get Atk() {
    let random3 = Math.random();
    if (random3 < 0.33) {
      player1.hp -= monster3.atk;
    } else if (random3 < 0.66) {
      player2.hp -= monster3.atk;
    } else if (random3 < 0.99) {
      player3.hp -= monster3.atk;
    }
  }
}

//몬스터 hp.atk 스탯 할당
const boss = new Boss(500, 20);
const monster2 = new Monster2(100, 10);
const monster3 = new Monster3(100, 10);

function Attack1() {
  const input1 = prompt(
    " 플레이어 1 : 공격할 대상을 선택하세요 \n 보스,쫄따구1,쫄따구2"
  );
  if (input1 !== "보스" && input1 !== "쫄따구1" && input1 !== "쫄따구2") {
    alert("그런 몬스터는 존재하지 않습니다");
    return;
  }
  switch (input1) {
    case "보스":
      player1.Atk1;
      break;
    case "쫄따구1":
      player1.Atk2;
      break;
    case "쫄따구2":
      player1.Atk3;
      break;
  }
  alert("플레이어1가 " + input1 + "를 공격했습니다.");
}

function Attack2() {
  const input2 = prompt(
    " 플레이어 2 : 공격할 대상을 선택하세요 \n 보스,쫄따구1,쫄따구2"
  );
  if (input2 !== "보스" && input2 !== "쫄따구1" && input2 !== "쫄따구2") {
    alert("그런 몬스터는 존재하지 않습니다");
    return;
  }
  switch (input2) {
    case "보스":
      player2.Atk1;
      break;
    case "쫄따구1":
      player2.Atk2;
      break;
    case "쫄따구2":
      player2.Atk3;
      break;
  }
  alert("플레이어2가 " + input2 + "를 공격했습니다.");
}

function Attack3() {
  const input3 = prompt(
    " 플레이어 3 : 공격할 대상을 선택하세요 \n 보스,쫄따구1,쫄따구2"
  );
  if (input3 !== "보스" && input3 !== "쫄따구1" && input3 !== "쫄따구2") {
    alert("그런 몬스터는 존재하지 않습니다");
    return;
  }
  switch (input3) {
    case "보스":
      player3.Atk1;
      break;
    case "쫄따구1":
      player3.Atk2;
      break;
    case "쫄따구2":
      player3.Atk3;
      break;
  }
  alert("플레이어 3이" + input3 + "를 공격했습니다.");
}

//몬스터 공격 함수
function monsterATK() {
  alert(
    "몬스터가 랜덤으로 3번의 공격을 합니다. \n (첫 턴에는 몬스터가 공격하지 않습니다.)"
  );
  boss.Atk;
  monster2.Atk;
  monster3.Atk;
}
function game() {
  Attack1();
  document.getElementById("player1.hp").innerHTML = player1.hp;
  //Html 화면 출력 아이디 부여
  Attack2();
  document.getElementById("player2.hp").innerHTML = player2.hp;
  Attack3();
  document.getElementById("player3.hp").innerHTML = player3.hp;
  monsterATK();
  document.getElementById("boss.hp").innerHTML = boss.hp;
  document.getElementById("monster2.hp").innerHTML = monster2.hp;
  document.getElementById("monster3.hp").innerHTML = monster3.hp;

  if (boss.hp <= 0 && monster2.hp <= 0 && monster3.hp <= 0) {
    alert("게임에서 승리하셨습니다.");
    return;
  }
}

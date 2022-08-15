const scissors = "가위";
const rock = "바위";
const paper = "보";

let round = 0; //게임 횟수

let money = 0;

//초기 비용 세팅(소유 자산이 0원이거나 100만원 미만이면 초기화 X)
function setMoney() {
  if (money != 0 || money > 1000000) {
    alert("초기화 조건을 만족하지 못합니다.");

    return;
  }

  //화면에 초기비용 10만원 출력
  money = 100000;
  document.getElementById("money").innerHTML = money;
}

//소유 자산이 0이거나 50만원 이상이면 게임종료
function game() {
  if (money <= 0 || money >= 1000000) {
    alert("게임이 종료 되었습니다");
    return;
  }

  //라운드가 9 초과이면 게임 끝
  if (round > 9) {
    alert("게임이 끝났어요");
    return;
  }

  //한 게임이 끝나면 라운드 +1
  round++;
  document.getElementById("round").innerHTML = round;

  const coin = Number(
    prompt("베팅 금액을 입력하세요 \n최소 베팅 금액은 10000원입니다.", 0)
  );
  if (coin > money) {
    alert("베팅 금액은 자산보다 많은 돈을 입력할 수 없습니다!");
    return;
  }

  if (coin <= 0) {
    coin("판돈은 음수를 입력할 수 없습니다.");

    return;
  }

  if (coin <= 9999) {
    alert("최소 금액은 10000원 이상입니다!");
    return;
  }
  const input = prompt("가위 바위 보");

  if (input !== scissors && input !== rock && input !== paper) {
    alert("가위, 바위, 보 중 하나를 입력해야 합니다!");
    return;
  }

  let pc = Math.random();

  if (pc < 0.33) {
    pc = scissors;
  } else if (pc < 0.66) {
    pc = rock;
  } else {
    pc = paper;
  }

  switch (input) {
    case scissors:
      switch (pc) {
        case scissors:
          alert("무승부입니다.");
          money;
          document.getElementById("money").innerHTML = money;
          break;
        case rock:
          alert("당신의 패배입니다.");
          money -= coin;
          document.getElementById("money").innerHTML = money;
          break;
        case paper:
          alert("당신의 승리입니다.");
          money += coin;
          document.getElementById("money").innerHTML = money;
          break;
      }
      break;
    case rock:
      switch (pc) {
        case scissors:
          alert("당신의 승리입니다.");
          money += coin;
          document.getElementById("money").innerHTML = money;
          break;
        case rock:
          alert("무승부입니다.");
          money;
          document.getElementById("money").innerHTML = money;
          break;
        case paper:
          alert("당신의 패배입니다.");
          money -= coin;
          document.getElementById("money").innerHTML = money;
          break;
      }
      break;
    case paper:
      switch (pc) {
        case scissors:
          alert("당신의 패배입니다.");
          money -= coin;
          document.getElementById("money").innerHTML = money;
          break;
        case rock:
          alert("당신의 승리입니다.");
          money += coin;
          document.getElementById("money").innerHTML = money;
          break;
        case paper:
          alert("무승부입니다.");
          money;
          document.getElementById("money").innerHTML = money;
          break;
      }
  }
}

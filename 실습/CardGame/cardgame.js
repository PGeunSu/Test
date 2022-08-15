let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let pattern = ["♦", "♥", "♣", "♠"];
let round = 0; //게임 횟수
let money = 0; //소지금
let user_card = []; //유저가 뽑은 카드
let com_pick = []; //컴퓨터가 뽑은 2개의 카드
let deck = [];

for (let a = 1; a < 53; a++) {
  let shuffle =
    pattern[Math.floor(Math.random() * [pattern.length])] +
    number[Math.floor(Math.random() * [number.length])];

  // if(deck.includes(shuffle)) {
  //    deck,push(shuffle);                    includes() 사용법
  //    }

  if (deck.indexOf(shuffle) == -1) {
    deck.push(shuffle);
  }
  //중첩된 번호 삭제
  else if (deck.indexOf(shuffle) >= 0) {
    a--;
  }
}

// console.log(deck);

money = 100000;
document.getElementById("money").innerHTML = money;

function game() {
  //버튼을 눌러 게임을 진행하기 때문에 for문 대신 function을 사용

  //게임 종료 조건
  if (money <= 0 || money >= 1000000) {
    alert("게임이 종료 되었습니다");
    return;
  }
  //  라운드가 17 초과이면 게임 끝
  if (round > 17) {
    alert("게임이 종료 되었습니다");
    return;
  }

  for (let b = 1; b <= 2; b++) {
    let two_pick = deck[Math.floor(Math.random() * deck.length)];
    if (com_pick.indexOf(two_pick) == -1) {
      com_pick.push(two_pick);
      deck.splice(deck.indexOf(com_pick), 1);
    } else if (com_pick.indexOf(two_pick) >= 0) {
      b--;
    }
  }

  // console.log(deck);
  // console.log(com_pick);

  alert(
    `컴퓨터가 뽑은 두 개의 카드는 ${com_pick[0]}와(과) ${com_pick[1]}입니다.`
  );

  let coin = Number(
    prompt("베팅 금액을 입력하세요. \n최소 베팅금액은 10,000원 입니다.", 0)
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

  //유저가 뽑는 카드
  let user_pick = deck[Math.floor(Math.random() * deck.length)];
  user_card.push(user_pick);
  deck.splice(deck.indexOf(user_pick), 1);

  // console.log(deck);
  alert(`당신의 카드는 ${user_card}입니다!`);
  //조건이 맞을 경우 승리
  if (
    (com_pick[0] < user_card && com_pick[1] > user_card) ||
    (com_pick[0] > user_card && com_pick[1] < user_card)
  ) {
    alert("당신의 승리입니다!!");
    money += coin;
    document.getElementById("money").innerHTML = money;
  } else {
    //위에 조건이 아니면 패배
    alert("당신의 패배입니다...");
    money -= coin;
    document.getElementById("money").innerHTML = money;
  }

  com_pick = []; //뽑은 카드 초기화
  user_card = [];

  round++; //게임이 끝나면 라운드+1
  document.getElementById("round").innerHTML = round; //라운드 HTMl출력
}

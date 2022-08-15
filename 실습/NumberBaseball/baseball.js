function game() {
  //컴퓨터 3자리 값 출력
  let round = 0;
  let comNum = [];
  for (i = 0; i < 3; i++) {
    randomNum = Math.floor(Math.random() * 9 + 1); // *9 + 1 = (1에서 부터 9사이에 숫자 출력)
    if (comNum.indexOf(randomNum) === -1) {
      comNum.push(randomNum); //중복 되는 값 처리
    } else {
      i--;
    }
  }

  //   console.log(comNum);
  // 3자리값 연속적으로 입력 받기
  let playNum = new Array(3);

  while (true) {
    round++;

    for (let i = 0; i < playNum.length; i++) {
      playNum[i] = Number(prompt("1 ~ 9 \n반복되지 않는 정수 입력", ""));
    }

    //   if (playNum[i] < 9) {
    //     alert("9이하의 숫자를 입력해주세요");
    //     return;                                    (보류)
    //   }

    //스트라이크 확인
    //스트라이크, 볼 0초기값
    let strike = 0;
    let ball = 0;

    for (let i = 0; i <= 2; i++) {
      //값이 같으면 스트라이크
      if (comNum[i] == Number(playNum[i])) {
        strike++;
      } else if (comNum.indexOf(Number(playNum[i])) >= 0) {
        ball++; //값의 위치는 안같으나 같은 값이 존재하는 경우
      }
    }
    // console.log(strike, ball);

    if (strike == 3) {
      alert(round + "라운드 종료" + "\n이겼어요");
      return;
    } else if ((strike == 0) & (ball == 0)) {
      alert(round + "라운드" + "아웃" + "\r당신의 답: " + playNum);
    } else {
      alert(
        round +
          "라운드\n" +
          strike +
          "스트라이크" +
          ball +
          "볼\n" +
          "당신의 답" +
          playNum
      );
    }

    if (round == 9) {
      alert(round + "라운드 종료\n" + "경기가 종료 되었습니다");
      return;
    }
  }
}
game();

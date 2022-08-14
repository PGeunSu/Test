import java.util.*;

public class AtmMethod {

  Scanner scan = new Scanner(System.in);
  int[] ids = new int[5]; //id 배열
  int[] pws = new int[5]; //PW배열
  int[] moneys = new int[5]; // 소지금
  int[] places = new int[5];
  int[] placesids = new int[5];
  int[] placespws = new int[5];

  int count = 0; // 회원 수
  int index = -1; //배열 index값
  int tranIdx = -1;

  boolean work = true; //while 반복문을 위한 boolean 메서드
  int check = 0;

  public void customorAdd() { //회원 가입
    if (count == 5) {
      System.out.println(
        "[메세지]계정 생성 불가 : 데이터베이스가 가득 찼습니다."
      );
      return;
    }
    System.out.print("[입력]사용하실 ID를 입력해주세요 : ");
    int newID = scan.nextInt();
    for (int i = 0; i < ids.length; i++) {
      if (newID == ids[i]) {
        check = -1;
      }
    }
    if (check == -1) {
      System.out.println("[메세지]이미 사용되고 있는 ID입니다.");
    }
    ids[count] = newID;

    System.out.print("[입력]사용하실 비밀번호를 입력해주세요 : ");
    int newPW = scan.nextInt();
    pws[count] = newPW;

    System.out.println("[메세지]가입이 완료되었습니다.");

    moneys[count] = 1000;
    count++;
  }

  public void Login() { //로그인 출력
    System.out.print("[입력]ID를 입력하세요 : ");
    int inputID = scan.nextInt();
    for (int i = 0; i < ids.length; i++) {
      if (ids[i] == inputID) {
        check = 1;
        index = i;
      }
    }
    if (check != 1) {
      System.out.println("[메세지]아이디를 찾을 수 없습니다.");
      return;
    }
    System.out.print("[입력]비밀번호를 입력하세요 : ");
    int inputPW = scan.nextInt();
    if (inputPW != pws[index]) {
      System.out.println("[메세지]비밀번호를 확인해주세요.");
      return;
    }

    System.out.println("[메세지]로그인 되었습니다.");
  }

  public void displayall() { //회원목록 출력
    for (int j = 0; j < count; j++) {
      int moneyplace = 4;
      for (int i = 0; i < count; i++) {
        if (moneys[j] > moneys[i]) {
          moneyplace--;
        } else if (moneys[j] == moneys[i]) {
          if (j > i) {
            moneyplace--;
          }
        }
      }
      places[moneyplace] = moneys[j];
      placesids[moneyplace] = ids[j];
      placespws[moneyplace] = pws[j];
    }
    for (int i = 0; i < moneys.length; i++) {
      System.out.println(
        placesids[i] + " / " + placespws[i] + " / " + places[i] + "원"
      );
    }
    System.out.println();
  }

  public void moneyAdd() { //입금
    System.out.print("[입력]입금할 금액을 입력해주세요 : ");
    int inputMoney = scan.nextInt();
    moneys[index] += inputMoney;
    System.out.println("[메세지]계좌에 " + moneys[index] + "원이 있습니다.");
  }

  public void moneyMinus() { //출금
    while (true) {
      System.out.print("[입력]출금할 금액을 입력해주세요 : ");
      int outputMoney = scan.nextInt();
      if (outputMoney > moneys[index]) {
        System.out.println("[메세지]금액이 부족합니다!");
        continue;
      }
      moneys[index] -= outputMoney;
      System.out.println("[메세지]계좌에 " + moneys[index] + "원이 있습니다.");
      break;
    }
  }

  public void transfer() { //이체
    System.out.print("[입력]이체할 ID를 선택해주세요 :");
    int transId = scan.nextInt();
    for (int i = 0; i < ids.length; i++) {
      if (transId == ids[i]) {
        tranIdx = i;
        check = 2;
      }
    }
    if (check != 2) {
      System.out.println("[메세지]이체할 ID를 확인해주세요.");
      return;
    }
    System.out.print("[입력]이체할 금액을 선택해주세요 : ");
    int transMoney = scan.nextInt();
    if (transMoney > moneys[index]) {
      System.out.println("[메세지] 금액이 부족합니다!");
      return;
    }
    moneys[index] -= transMoney;
    moneys[tranIdx] += transMoney;

    System.out.println(
      "[메세지]현 계좌에는 " + moneys[index] + "원이 있습니다."
    );
    System.out.println(
      "[메세지]입금된 계좌에는 " + moneys[tranIdx] + "원이 있습니다."
    );
  }

  public void customorRevice() { //회원정보 수정
    System.out.print("[입력]새로운 비밀번호를 입력해주세요 : ");
    int changePW = scan.nextInt();
    pws[index] = changePW;
    System.out.println("[메세지]비밀번호가 변경되었습니다!");
  }

  public void customorSecession() { //회원 탈퇴
    if (index == 4) {
      ids[index] = 0;
      pws[index] = 0;
      moneys[index] = 0;
    }
    for (int i = index; i < ids.length - 1; i++) {
      ids[index] = ids[index + 1];
      pws[index] = pws[index + 1];
      moneys[index] = moneys[index + 1];
      ids[index + 1] = 0;
      pws[index + 1] = 0;
      moneys[index + 1] = 0;
    }
    count--;

    System.out.println("[메세지]회원탈퇴 되었습니다.");
  }

  public void display() { //메뉴판
    System.out.println("-----------------------------------");
    System.out.println(
      "[회원수] : " + count + "명,    [현재접속자] : " + ids[index]
    );
    System.out.println("-----------------------------------");
    System.out.println("ID(" + ids[index] + ")| " + moneys[index] + "원");
    System.out.println("============ ATM MENU ============");
    System.out.println("| 1.입금      |5.로그아웃    |");
    System.out.println("| 2.출금      |6.회원수정    |");
    System.out.println("| 3.이체      |7.회원탈퇴    |");
    System.out.println("| 4.종료      |             |");
    System.out.println("===================================");

    System.out.println("[메세지]로그인 되었습니다.");
  }
}

// import java.util.*;

// public class ATM {

// public static void main(String[] args) {

// int member = 0; // 회원 수

// while (true) {

// System.out.println("------------------------------------");
// System.out.println("[회원수] : " + member + "명," + "[현재 접속자] : " + "없음");
// System.out.println("------------------------------------");

// System.out.println("==============ATM MENU==============");

// System.out.println("| 1.회원가입 |");
// System.out.println("| 2.로그인 |");
// System.out.println("| 3.전체회원목록 |");
// System.out.println("| 4.종료 |");

// System.out.println("====================================");

// Scanner sc = new Scanner(System.in);

// int signUp = sc.nextInt();

// switch (signUp) {

// case 1:
// for (int i = 0; i < 100; i++) {

// System.out.print("[입력] 신규 아이디를 입력 : ");
// int input1 = sc.nextInt(); // 아이디 입력

// System.out.print("[입력] 신규 비번 입력 : ");
// int input2 = sc.nextInt(); // 비밀번호 입력

// if (member > 5) { // 회원 수 제한
// System.out.println("회원 수가 초과되었습니다 더이상 회원가입이 불가능합니다");
// break;
// }
// break;
// }

// case 3:
// System.out.println("현재 회원 목록");

// }
// System.out.println("==============ATM MENU==============");

// System.out.println("| 1.회원가입 | 5.로그아웃 |");
// System.out.println("| 2.로그인 | 6.회원수정 |");
// System.out.println("| 3.전체회원목록 | 7.회원탈퇴 |");
// System.out.println("| 4.종료 | |");

// System.out.println("====================================");

// int select = sc.nextInt();

// switch (select) {

// case 1:
// while (true) {
// System.out.print("\n입금할 금액을 입력하세요 : ");
// long currentDepsit = sc.nextInt();

// if (currentDepsit >= 1) {
// money += currentDepsit;
// break;
// } else {
// System.out.println("(경고) 1원 이상의 금액을 입력하세요\n");
// }
// }
// System.out.println("입금이 완료 되었습니다");

// // 현재 잔액 표시
// System.out.println("\n현재 잔액 : " + money + "원\n");
// break;

// case 2:

// System.out.println("\n현재 잔액 : " + money + "원\n");

// // 잔액이 없을 시
// if (money == 0) {
// System.out.println("(경고) 잔액이 없습니다. \n");
// } else {
// while (true) {
// System.out.print("\n 출금할 금액을 입력하세요 (0 : 빠져나가기) : ");
// long currentWidthdraw = sc.nextLong();

// if (currentWidthdraw < 0) {
// System.out.println("(경고) 마이너스 단위는 출금할 수 없습니다.\n");
// } else if (currentWidthdraw == 0) {
// System.out.println("(경고) 출금 절차를 종료합니다.\n");
// break;
// } else if (currentWidthdraw > money) {
// System.out.println("(경고) 잔액보다 많은 액수를 출금할 수 없습니다.");
// } else {
// money -= currentWidthdraw;
// System.out.println(currentWidthdraw + "원의 출금을 완료하였습니다.");
// System.out.println("\n현재 잔액 : " + money + "원\n");
// break;
// }
// } // while 끝
// }
// break;

// case 3:

// System.out.println("\n현재 잔액 : " + money + "원\n");
// break;

// case 4:

// System.out.println("\nATM을 종료합니다. 두고가시는 물건이 없는 지 확인해주세요");
// System.exit(0);

// default:
// System.out.println("올바른 메뉴 번호를 입력하세요. (1~4)");

// sc.close();
// }

// }

// }
// }
// }
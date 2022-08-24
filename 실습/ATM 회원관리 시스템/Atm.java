import java.util.*;

public class Atm {

  public static void main(String[] args) {
    AtmMethod atm = new AtmMethod();
    Scanner scan = new Scanner(System.in);

    int login = 0; //로그인 로그아웃 구현
    boolean work = true;

    while (work) {
      int end = 0;

      while (login == 1) {
        atm.display();

        System.out.print("**메뉴를 입력하세요 : ");

        int selectL = scan.nextInt();

        if (selectL == 1) {
          atm.moneyAdd();
        } else if (selectL == 2) {
          atm.moneyMinus();
        } else if (selectL == 3) {
          atm.transfer();
        } else if (selectL == 4) {
          end = 1;
          break;
        } else if (selectL == 5) {
          login = 0;
        } else if (selectL == 6) {
          atm.customorRevice();
        } else if (selectL == 7) {
          atm.customorSecession();
          login = 0;
        } else {
          System.out.println("[메세지]올바른 메뉴를 선택해주세요.");
        }
      }
      if (end == 1) {
        System.out.println("[메세지]ATM 사용을 종료합니다.");
        work = false;
        break;
      }
      System.out.println("============ ATM MENU ============");
      System.out.println("| 1.회원가입    |");
      System.out.println("| 2.로그인      |");
      System.out.println("| 3.전체회원목록|");
      System.out.println("| 4.종료        |");
      System.out.println("===================================");
      System.out.print("**메뉴를 입력하세요 : ");
      int select = scan.nextInt();

      if (select == 1) {
        atm.customorAdd();
      } else if (select == 2) {
        atm.Login();
        login = 1;
      } else if (select == 3) {
        atm.displayall();
      } else if (select == 4) {
        System.out.println("[메세지]ATM 사용을 종료합니다.");
        work = false;
      } else {
        System.out.println("[메세지]올바른 메뉴를 선택해주세요.");
      }
    }
  }
}

import java.util.*;

public class Customer {

    public String id = null; // 아이디
    public String pw = null;// 비밀번호
    public static int customerCount = -1; // 회원 수
    public int money = 0; // 소지금

    public Customer[] customer = new Customer[5];
    public int customerCurrent = -1;

    public Customer(String id, String pw) {
        this.id = id;
        this.pw = pw;

    }

    public Customer() {
        customerCount++;
    }

    public boolean isLogin(String id, String pw) {
        boolean retrunValue = false; // 2번
        if (this.id.equals(id) && this.pw.equals(pw)) {
            retrunValue = true;
        }
        return retrunValue;
    }

    public void display() {

        System.out.println(Customer.customerCount + ")  " + id + " / " + pw + " / " + money + "원");
    }

    public void add(int money) {
        this.money = this.money + money;
        System.out.println("\n입금 완료!!!");

    }

    public void minus(int money) {

        if (this.money < money) {
            System.out.println("[오류]잔액 부족!!!!");
        } else {
            this.money = this.money - money;
            System.out.println("\n출금 완료!!!");
        }

    }

    public void customerAdd() {
        Scanner sc = new Scanner(System.in);
        System.out.print("[입력] 신규 아이디를 입력 : ");
        String id = sc.nextLine();
        if (isId(id)) { // id 중복확인
            System.out.println("이미 가입된 아이디 입니다.");
            return;
        }
        System.out.print("[입력] 신규 비번 입력 : ");
        String pw = sc.nextLine();
        customer[customerCount++] = new Customer(id, pw);
    }

    private boolean isId(String id) { // id 중복확인 메서드
        boolean returnValue = false;
        for (int i = 0; i < customerCount; i++) {
            if (customer[i].id.equals(id)) {
                returnValue = true;
            }
            ;
        }
        return returnValue;
    }

    public boolean login(String id, String pw) { // 로그인
        // 아이디와 패스워드가 같은사람이 존재하면 true를 리턴한다

        boolean Value = false;
        for (int i = 0; i < customerCount; i++) {
            if (customer[i].isLogin(id, pw)) {
                Value = true;
                customerCurrent = i;
                break;
            }
        } // true면 로그인 성공, returnValue(false)면 로그인 실패
        return Value;
    }

    public void logout() { // 로그아웃
        customerCurrent = -1;
        System.out.println("로그아웃 되었습니다");
        menu();
    }

    public void displayAll() { // 모든 계정을 보여주는 메소드

        for (int i = 0; i < customerCount; i++) {
            customer[i].display();
        }
    }

    public void useAccount() { // 아이디 일치 시 사용
        if (customerCurrent != -1) {
            customer[customerCurrent].menu2();
        } else {
            System.out.println("잘못된 접근입니다");
        }
    }

    public void menu() {
        Scanner sc = new Scanner(System.in);
        boolean flag = true;

        while (flag) {

            System.out.println("------------------------------------");
            System.out.println("[회원수] : " + customerCount + "명," + "[현재 접속자] : " + this.id);
            System.out.println("------------------------------------");

            System.out.println("==============ATM MENU==============");

            System.out.println("| 1.회원가입     |");
            System.out.println("| 2.로그인       |");
            System.out.println("| 3.전체회원목록 |");
            System.out.println("| 4.종료         |");

            String input = sc.nextLine();

            switch (input) {
                case "1":
                    customerAdd();
                    break;
                case "2":
                    System.out.print("[입력] ID(이름) : ");
                    String id = sc.nextLine();
                    System.out.print("[입력] 비밀번호 : ");
                    String pw = sc.nextLine();

                    if (login(id, pw)) {
                        System.out.println("[메세지]로그인 되었습니다.");
                        useAccount();
                    } else {
                        System.out.println("아이디 또는 비밀번호를 정확히 입력하세요");
                    }
                    break;

                case "3":
                    displayAll();
                    break;
                case "4":
                    System.out.println("이용해주셔서 감사합니다");
                    flag = false;
                    break;
                case "5":
                    logout();
                case "6":

                default:
                    System.out.println("잘못된 입력입니다");
            }

        }
    }

    public void menu2() {

        Scanner sc = new Scanner(System.in);
        String inputString = null;
        boolean flag = true;

        while (flag) {
            System.out.println("====================================");

            System.out.println("==============ATM MENU==============");

            System.out.println("ID(" + this.id + ")" + this.money + "원");
            System.out.println("| 1.입금         | 5.로그아웃      |");
            System.out.println("| 2.출금         | 6.회원수정      |");
            System.out.println("| 3.이체         | 7.회원탈퇴      |");
            System.out.println("| 4.종료         |                |");

            System.out.println("====================================");

            inputString = sc.nextLine();

            switch (inputString)

            {
                case "1":
                    System.out.print("[입력]입금액 : ");
                    int money = Integer.parseInt(sc.nextLine());
                    add(money);
                    break;
                case "2":
                    System.out.println("[입력]출금액 : ");
                    money = Integer.parseInt(sc.nextLine());
                    minus(money);
                    break;
                case "3":
                    break;// =-----------------------------------
                case "4":
                    System.out.println("사용을 종료하셨습니다");
                    flag = false;
                    break;
                case "5":
                    logout();
                    break;
                case "6":
                    if (customerCurrent != -1) {
                        System.out.println("pw를 입력하세요");
                        pw = sc.nextLine();
                        delect(pw);
                    }
                    break;
                default:
                    System.out.println("잘못된 입력입니다");
            }
        }
    }

    public void delect(String pw) {
        delect(customer[customerCurrent].pw);

        Customer.customerCount--;
        customerCount--;
        customerCurrent = -1;
        System.out.println("삭제되었습니다");
    }

    public static void main(String[] args) {
        Customer test = new Customer();

        test.menu();
    }
}

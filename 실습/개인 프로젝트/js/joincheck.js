//정규 표현식
function check() {

  let member_id = document.getElementById("member_id"); //아이디
  let passwd = document.getElementById("passwd"); // 비밀번호
  let user_passwd_confirm = document.getElementById("user_passwd_confirm"); //비밀번호 재입력
  let nameContents = document.getElementById("nameContents"); // 이름
  let mobile1 = document.getElementById("mobile1"); //핸드폰 번호 가운데 자리
  let mobile2 = document.getElementById("mobile2"); // 핸드폰 번호 끝자리
  let email1 = document.getElementById("email1"); //이메일
  let bank_account_owner = document.getElementById("bank_account_owner"); //예금주
  let bank_account_no = document.getElementById("bank_account_no"); //계좌번호


  //아이디 정규식
  let idChk = /^[a-z0-9]{4,12}$/; //4~12자리로 아이디를 생성 가능

  // 비밀번호 정규식
  let pwChk = /^[A-Za-z0-9]{4,16}$/; //대/소문자, 숫자로 4~16자리 비밀번호 생성 가능

  // 이름, 예금주 정규식
  let nameChk = /^[가-힣]{2,6}$/; //가~힣 한글로 이루어진 문자로만 2~6자리 이름 생성 가능

  // 이메일 검사 정규식
  let mailChk = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  //특수문자가 가능하며 중앙에 @ 필수, .뒤에 2~3글자가 필요하다.
  //핸드폰 번호 정규식
  let numberChk = /^d{4}/; //4자리만 입력 가능

  //계좌번호 정규식
  let bankNumChk = /^d{12,14}/; // 숫자 12~14 자리 입력 가능



  // 빈칸일시
  if (member_id.value == "") {
    alert("아이디를 입력하세요.");
    member_id.focus();
    return false;
  }
  if (passwd.value == "") {
    alert("비밀번호를 입력하세요.");
    passwd.focus();
    return false;
  }
  if (user_passwd_confirm == "") {
    alert("비밀번호를 한 번더 입력하세요.");
    user_passwd_confirm.focus();
    return false;
  }
  if (nameContents.value == "") {
    alert("이름을 입력하세요.");
    nameContents.focus();
    return false;
  }
  if (mobile1.value == "") {
    alert("번호를 입력하세요.");
    mobile1.focus();
    return false;
  }
  if (mobile2.value == "") {
    alert("번호를 입력하세요.");
    mobile2.focus();
    return false;
  }
  if (email1.value == "") {
    alert("이메일을 입력하세요.");
    email1.focus();
    return false;
  }
  if (bank_account_owner.value == "") {
    alert("예금주를 입력하세요.");
    bank_account_owner.focus();
    return false;
  }
  if (bank_account_no.value == "") {
    alert("계좌번호를 입력하세요.");
    bank_account_no.focus();
    return false;
  }

  //유효성 검사
  if (!idChk.test(member_id.value)) {
    alert("아이디는 4~12자리로 설정해주세요.");
    member_id.focus();
    return false;
  }
  if (!pwChk.test(passwd.value)) {
    alert("비밀번호는 대/소문자, 숫자 포함 4~16자리로 설정해주세요.");
    passwd.focus();
    return false;
  }
  if (passwd.value !== user_passwd_confirm.value) {
    alert("비밀번호가 일치하지 않습니다.");
    user_passwd_confirm.focus();
    return false;
  }
  if (!nameChk.test(nameContents.value)) {
    alert("한글 2~6자로 입력해주세요.");
    nameContents.focus();
    return false;
  }
  if (!numberChk.test(mobile1.value)) {
    alert("번호는 4자리만 입력 가능합니다.");
    mobile1.focus();
    return false;
  }
  if (!numberChk.test(mobile2.value)) {
    alert("번호는 4자리만 입력 가능합니다");
    mobile2.focus();
    return false;
  }
  if (!mailChk.test(email1.value)) {
    alert("이메일 형식에 맞지 않습니다.");
    email1.focus();
    return false;
  }
  if (!nameChk.test(bank_account_owner.value)) {
    alert("예금주는 2~6자로 입력해주세요");
    bank_account_owner.focus();
    return false;
  }
  if (!bankNumChk.test(bank_account_no.value)) {
    alert("계좌번호는 12~14자리로 입력해주세요.");
    bank_account_no.focus();
    return false;
  }

}

// @ 포함여부와 대 소문자 구분 X
const Email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

function check() {
  //변수에 담아주기
  let id = document.getElementById("id");
  let pw = document.getElementById("pw");
  let repw = document.getElementById("repw");
  let name = document.getElementById("name");
  let number = document.getElementById("number");
  let email_id = document.getElementById("email_id");

  if (id.value == "") {
    //해당 입력값이 없을 경우 같은말: if(!uid.value);
    alert("아이디를 입력하세요.");
    id.focus();
    return false;
  }
  if (pw.value == "") {
    alert("비밀번호를 입력하세요.");
    pw.focus();
    return false;
  }

  //최소 8 자, 하나 이상의 대문자 포함
  const Password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!Password.test(pw.value)) {
    alert("비밀번호는 하나 이상의 대문자+영문자+숫자+특수문자 조합으로 최소 8자리 사용해야 합니다.");
    pwd.focus();
    return false;
  }
  if (repw.value !== pw.value) {
    alert("비밀번호가 일치하지 않습니다..");
    repw.focus();
    return false;
  }

  if (name.value == "") {
    alert("이름을 입력하세요.");
    name.focus();
    return false;
  }

  //핸드폰 번호 : 3자리/ 4자리 / 4자리 숫자
  const PhoneNumber = /^\d{3}-\d{4}-\d{4}$/;

  if (!PhoneNumber.test(number.value)) {
    alert("전화번호는 숫자만 입력할 수 있습니다. 하이픈( - ) 포함 11자리");
    phone.focus();
    return false;
  }
  if (email_id.value == "") {
    alert("이메일 주소를 입력하세요.");
    email_id.focus();
    return false;
  }
}

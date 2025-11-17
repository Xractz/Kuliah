function fn_ValForm() {
  var sMsg = "";
  var emailPattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

  var nameField = document.getElementById("name").value;
  if (nameField == "") {
    sMsg += "\n* Anda belum mengisikan nama";
  }

  var emailField = document.getElementById("email").value;
  if (emailField == "") {
    sMsg += "\n* Anda belum mengisikan email";
  } else if (!emailPattern.test(emailField)) {
    sMsg += "\n* Format email tidak valid";
  }

  var messageField = document.getElementById("message").value;
  if (messageField == "") {
    sMsg += "\n* Anda belum mengisikan pesan";
  }

  if (sMsg != "") {
    alert("Peringatan:\n" + sMsg);
    return false;
  } else {
    return true;
  }
}
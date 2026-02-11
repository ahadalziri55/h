document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();
    let msg = document.getElementById("message");

    if (user === "" || pass === "") {
        msg.textContent = "الرجاء تعبئة جميع الحقول";
        return;
    }

    if (user === "admin" && pass === "1234") {
        msg.style.color = "green";
        msg.textContent = "تم تسجيل الدخول بنجاح!";
    } else {
        msg.style.color = "red";
        msg.textContent = "بيانات الدخول غير صحيحة";
    }
});

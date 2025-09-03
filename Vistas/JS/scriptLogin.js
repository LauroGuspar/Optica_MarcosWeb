    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");
    const registerBtnMobile = document.getElementById("registerMobile");
    const loginBtnMobile = document.getElementById("loginMobile");

    registerBtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
    });

    registerBtnMobile.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.add("active");
    });

    loginBtnMobile.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.remove("active");
    });
    
    // Script para actualizar el año en el footer
    document.getElementById("year").textContent = new Date().getFullYear();
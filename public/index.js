//************  Login and otp verification  ************************************************************************************* */
//*******OTP Genration */
const generateOTP = () => {
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp;
};

document.addEventListener("DOMContentLoaded", () => {
  const emailDiv = document.getElementById("email-verification");
  const otpDiv = document.getElementById("otp-verification");
  const form = document.getElementById("otp-form");
  const inputs = [...form.querySelectorAll("input[type=text]")];
  const sendOtpBtn = document.getElementById("send-otp-btn");
  const verifyOtpBtn = document.getElementById("verify-otp-btn");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  //********* sending email using emailjs */
  let otp = generateOTP(); // generate OTP
  const sendMail = () => {
    let messageparam = `Here's your 4 digit OTP ${otp}`;
    let params = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageparam,
    };

    const serviceID = "service_e4h12vd";
    const templateID = "template_ep7bhys";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        console.log(res);
        alert("OTP has been successfully sent to your email");
      })
      .catch((err) => console.log(err));
  };

  // otp send button
  sendOtpBtn.addEventListener("click", () => {
    //**********verification logic of email and name field  *************
    // Validate name
    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    // If both fields are valid, proceed with sending OTP

    sendMail();
    //email sending logic
    // let otp = generateOTP();

    // hidding the email div
    emailDiv.classList.add("hidden");
    otpDiv.classList.remove("hidden");
  });

  //***********OTP input logic **************
  const handleKeyDown = (e) => {
    if (!/^[0-9]{1}$/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
      e.preventDefault();
    }

    if (e.key === "Backspace") {
      let index = inputs.indexOf(e.target);
      if (index == 3) {
        inputs[3].value = "";
        inputs[2].focus();
      } else if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  };

  const handleInput = (e) => {
    const index = inputs.indexOf(e.target);
    if (e.target.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  };

  inputs.forEach((input) => {
    input.addEventListener("input", handleInput);
    input.addEventListener("keydown", handleKeyDown);
  });

  verifyOtpBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const inpotp = inputs.map((input) => input.value).join("");

    if (inpotp == otp) {
      // alert("successful");
      console.log("done");

      window.location.href = "https://im-dipak-shedge.github.io/Quizify/public/main.html";
    } else {
      alert("Please enter a complete OTP.");
    }
  });

  document.querySelector("a").addEventListener("click", () => {
    emailDiv.classList.remove("hidden");
    otpDiv.classList.add("hidden");
  });
});

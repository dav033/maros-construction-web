function sendEmail(name, email, phone, message, subject) {
  fetch("https://maros-backend.onrender.com/contact-us", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, phone, message, subject }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default {
  sendEmail,
};

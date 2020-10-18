add = document.querySelector("#addmessage");
allmessages = document.querySelector(".chathistory");
toggler = document.querySelector(".toggler");
bar = document.querySelector(".bar");

// adding new message to the messages
add.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    ms = add.value;
    time = moment().format("LT");
    message = `<div class="guest">
          <div class="message">${ms}</div>
          <div class="time">${time}</div>
        </div>`;
    allmessages.innerHTML += message;
    this.value = "";
    this.focus();
  }
});

// removeing the bar for full contacts viewing

toggler.addEventListener("click", function () {
  bar.classList.toggle("badremover");
});

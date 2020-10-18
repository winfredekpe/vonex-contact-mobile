add = document.querySelector("#addmessage");
allmessages = document.querySelector(".chathistory");
toggler = document.querySelector(".toggler");
bar = document.querySelector(".socials");
istoggled = document.querySelector(".bar");

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
shouldtoggle = false
toggler.addEventListener("click", function () {
if(shouldtoggle === false){
  // bar.style.display = 'none'
  anime({
    targets: bar,
    scale: 0,
    // easing: 'easeInOutSine'
  });
  
}else{
  // bar.style.display = 'flex'
  anime({
    targets: bar,
    scale: 1,
    // easing: 'easeInOutSine'
  });
  
}
  shouldtoggle = !shouldtoggle
});


function buttonclicked() {
  alert("e");
  for (let i = 0; i < 10;) {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    alert(i);
    i++;
  }
}
button.addEventListener("click", buttonclicked);
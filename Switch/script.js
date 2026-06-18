const button = document.getElementById('button');
const card = document.querySelector('.card');
const text = document.getElementById("text");

button.addEventListener("click", function(){
  if(text.textContent === "Hello, World!"){
   text.textContent = "Goodbye, World!"; 
  }
  else{
    text.textContent = "Hello, World!";
  }
})

button.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
    card.classList.toggle('darkmode');
    button.classList.toggle('darkmode');
    text.classList.toggle("darkmode");
});
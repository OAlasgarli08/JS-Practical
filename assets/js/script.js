const button = document.querySelector("button");

button.addEventListener("click", function(){
    const text = document.querySelector(".text");

    const table = document.querySelector('table');

    if(text.value === ""){
        alert('Cannot be empty bruv');
        return;
    }

   const tr = document.createElement('tr');

   const textTd = document.createElement('td');

    textTd.innerHTML = text.value;

   tr.style.backgroundColor = "yellow";
   tr.style.color = "darkorange";
   

   tr.append(textTd);

    table.append(tr);
})
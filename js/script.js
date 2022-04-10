const formBtn = document.getElementById("form-btn");
console.log(formBtn);
formBtn.addEventListener("click",
    function() {
        const userName = document.getElementById("user-name").value;
        console.log(userName);
        
        const distance = document.getElementById("distance").value;
        console.log(distance)

        const age = document.getElementById("age").value;
        console.log(age)

        //calcola prezzo del biglietto sconti esclusi
        const price = distance * 0.21;
        console.log(price);
        
        const ticketName = document.querySelector(".ticket-name p")
        console.log(ticketName)
        ticketName.innerHTML = `${userName}`;
        

        //Se l'età è minore di 18 anni il prezzo finale corrisponde a u18price
        //Se l'età è superiore a 65 anni il prezzo finale corrisponde a o65price
        //altrimenti il prezzo finale corrisponde a price
        let finalprice;
        if (age === "minorenne") {
            const u18discount = (price * 20 ) / 100;
            console.log(u18discount);
            finalprice = price - u18discount;
        } else if (age === "over65"){
            const o65discount = (price * 40 ) / 100;
            console.log(o65discount);
            finalprice = price - o65discount;
        } else {
            finalprice = price;
        }

        console.log(finalprice);
        
        const ticketPrice = document.querySelector(".price p")
        console.log(ticketPrice)
        ticketPrice.innerHTML = `${finalprice.toFixed(2)}` + `€`;
       
    }
);




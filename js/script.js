//quando l'utente clicca il bottone
const formBtn = document.getElementById("form-btn");
console.log(formBtn);
formBtn.addEventListener("click", function() {
    //chiedere il nome e il cognome dell'utente
        const userName = document.getElementById("user-name").value;
        console.log(userName);
    //chiedere quanti km deve percorrere l'utente   
        const distance = document.getElementById("distance").value;
        console.log(distance)
    //se i dati di distance non vengono inseriti in forma numerica
        if(isNaN(distance)) {
            alert("I dati inseriti non sono corretti")
        //Ripulire i campi di distance
            let distance = document.getElementById("distance");
            distance.value = "";
        //Nascondere il biglietto
            let ticket = document.querySelector(".ticket");
            ticket.classList.add("d-none");
            
    //se i dati di disctance vengono inseriti corretamente
         }   else {
        //calcolare il prezzo        
                let price = distance * 0.21;
                console.log(price);
        //Nascondere il biglietto
                let ticket = document.querySelector(".ticket");
                console.log(ticket);
                ticket.classList.remove("d-none");
        }

    //chiedere l'età dell'utente
        const age = document.getElementById("age").value;
        console.log(age)

    //calcola prezzo del biglietto sconti esclusi
        const price = distance * 0.21;
        console.log(price);

    //visualizza il biglietto nella pagina
    //inserisci nome dell'utente
        document.getElementById('ticket-name').innerHTML = `${userName}`;
        
    //calcolare e inserisci numero carrozza nel biglietto
        const carrozza = Math.floor(Math.random() * 9) + 1;
        console.log(carrozza);
        document.getElementById('carrozza').innerHTML = `${carrozza}`;

    //calcolare e inserisci codice cp nel biglietto
        const codiceCP = Math.floor(Math.random() * 300) + 9200;
        console.log(codiceCP);
        document.getElementById('codiceCP').innerHTML = `${codiceCP}`;

    //Se l'età è minore di 18 anni il prezzo finale corrisponde a u18price 
    //Se l'età è superiore a 65 anni il prezzo finale corrisponde a o65price
    //altrimenti il prezzo finale corrisponde a price
        let finalprice;
        if (age === "minorenne") {
            const u18discount = (price * 20 ) / 100;
            console.log(u18discount);
            finalprice = price - u18discount;
            document.getElementById('offerta').innerHTML = `Offerta under18`;
        } else if (age === "over65"){
            const o65discount = (price * 40 ) / 100;
            console.log(o65discount);
            finalprice = price - o65discount;
            document.getElementById('offerta').innerHTML = `Offerta over65`;
        } else {
            finalprice = price;
            document.getElementById('offerta').innerHTML = `Offerta standard`;
        }
        console.log(finalprice);
    
    //inserisco il prezzo finale nel biglietto in forma naturale
        const ticketPrice = document.querySelector(".price p")
        console.log(ticketPrice)
        ticketPrice.innerHTML = `${finalprice.toFixed(2)}` + `€`;
    }
);

//tasto annulla
const formClearBtn = document.getElementById("form-clear-btn");
console.log(formClearBtn);

formClearBtn.addEventListener("click", 
    function() {
    
    //Nascondo biglietto
        const ticket = document.querySelector(".ticket");
        ticket.classList.add("d-none");

    //Ripulsco i campi
        const userName = document.getElementById("user-name");
        console.log(userName);
        userName.value = "";

        const distance = document.getElementById("distance");
        distance.value = "";

        const age = document.getElementById("age")
        age.value = "";
    }
);


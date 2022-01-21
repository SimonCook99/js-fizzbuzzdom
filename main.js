let container = document.getElementById("container");


/* ciclo che scorre da 1 a 100*/
for(let i = 1; i < 101; i++){


    if(i % 3 == 0 && i % 5 != 0){ //divisibilità per 3
        container.innerHTML += "<div class ='box fizz'>" + "fizz" + "</div>";
    }else if(i % 5 == 0 && i % 3 != 0){ //divisibilità per 5
        container.innerHTML += "<div class ='box buzz'>" + "buzz" + "</div>";
    }else if(i % 3 == 0 && i % 5 == 0){ //divisibilità per 3 e 5
        container.innerHTML += "<div class ='box fizz buzz'>" + "fizzbuzz" + "</div>";
    }
    else{ //quadrato di default
        container.innerHTML += "<div class = 'box'>" + i + "</div>";
    }

    
}
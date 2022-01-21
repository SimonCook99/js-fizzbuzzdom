let container = document.getElementById("container");


/* ciclo che scorre da 1 a 100*/
for(let i = 1; i < 101; i++){

    /* Il caso dei multipli di entrambi bisogna metterlo in cima altimenti esce prematuramente nell'if */
    if(i % 3 == 0 && i % 5 == 0){
        container.innerHTML += "<div class ='box fizz buzz'>" + "fizzbuzz" + "</div>";
    }else if(i % 3 == 0){
        container.innerHTML += "<div class ='box fizz'>" + "fizz" + "</div>";
    }else if(i % 5 == 0){
        container.innerHTML += "<div class ='box buzz'>" + "buzz" + "</div>";
    }else{
        container.innerHTML += "<div class = 'box'>" + i + "</div>";
    }

    
}
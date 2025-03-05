window.onload = function() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);

    document.querySelector("#excusa").innerHTML = who[randomWho] + " " + action[randomAction]+  " "  + what[randomWhat]+  " "  + when[randomWhen];
}

//Use comillas para dejar espacios en blanco porque si no se juntaba todo, es una solucion viable o se puede hacer de otra manera?

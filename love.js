let love_text = document.getElementById("love-percentage");
let love_p = document.getElementById("love-p");
function calculateLove(){
    let n = Math.random();
    n = n * 100;
    n = Math.round(n);
    console.log(n);

    if(n === 0){
       change_h2(n);
       love_p.innerHTML = "But the fries in the back :(";
    }
    else if(n <= 25){
        change_h2(n);
        love_p.innerHTML = "There is small chance, but don't expect anything crazy.";

    }
    else if(n <= 50){
        change_h2(n);
        love_p.innerHTML = "It's fifty fifty.";
    }
    else if(n <= 75){
        change_h2(n);
        love_p.innerHTML = "There is quite a big chance.";
    }
    else{
        change_h2(n);
        love_p.innerHTML = "Just marry that person at this point.";
    }
}

function change_h2(number){
    love_text.innerHTML = number;
}
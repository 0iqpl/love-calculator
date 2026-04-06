let love_text = document.getElementById("love-percentage");

function calculateLove(){
    let n = Math.random();
    n = n * 100;
    n = Math.round(n);
    console.log(n);
    console.log(love_text);
    love_text.innerHTML = n + "%";
}
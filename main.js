/*Takım1'in skorunu artır*/
function scoreartıa() {
    let scoreElement = document.getElementById("scorea");
    let score = parseInt(scoreElement.innerText);
    score++;
    scoreElement.innerText = score;
}
/*Takım 1'in skorunu azalt*/
function scoreeksia() {
    let scoreElement = document.getElementById("scorea");
    let score = parseInt(scoreElement.innerText);
    if (score > 0) {
        score--;
    }
    scoreElement.innerText = score;
}
/*Takım 2'nin skorunu artır */
function scoreartıb() {
    let scoreElement = document.getElementById("scoreb");
    let score = parseInt(scoreElement.innerText);
    score++;
    scoreElement.innerText = score;
}
/*Takım 2'nin skorunu azalt*/
function scoreeksib() {
    let scoreElement = document.getElementById("scoreb");
    let score = parseInt(scoreElement.innerText);
    if (score > 0) { 
        score--;
    }
    scoreElement.innerText = score;
}
/*Takım 1 için gol sayısı butonunu güncelleme */
function golsayısıa() {
    let yeniSkor = prompt("Please enter the new number of goals for Team 1:");
    yeniSkor = parseInt(yeniSkor);
    if (!isNaN(yeniSkor) && yeniSkor >= 0) {
        document.getElementById("scorea").innerText = yeniSkor;
    } else {
        alert("Please enter a valid number!");
    }
}
/*Takım 1 için gol sayısı butonunu güncelleme */
function golsayısıb() {
    let yeniskor =prompt("Please enter the new number of goals for Team 1:");
    yeniskor = parseInt(yeniskor);
    if (!isNaN(yeniskor) && yeniskor >= 0) {
        document.getElementById("scoreb").innerText = yeniskor;
    } else {
        alert("Please enter a valid number!");
    }
}
/*Takım 1 için yeni ad girme güncellemesi */
function TakımAdiniDegistir1() {
    let yeniAd = prompt("Please enter the new name for Team 1:");

    if (yeniAd !== null && yeniAd !== "") {
        document.getElementById("takım1").innerText = yeniAd;
    } else {
        alert("You must enter a valid team name!");
    }
}
/*Takım 2 için yeni ad girme güncellemesi */
function TakımAdiniDegistir2() {
    let yeniAd = prompt("Please enter the new name for Team 2:");
    if (yeniAd !== null && yeniAd !== "") {
        document.getElementById("takım2").innerText = yeniAd;
    } else {
        alert("You must enter a valid team name!");
    }
}
/*Reset All butonu aktif etme*/
function resetAll() {
    document.getElementById("scorea").innerText = "0";
    document.getElementById("scoreb").innerText = "0";
    document.getElementById("takım1").innerText = "Girls";
    document.getElementById("takım2").innerText = "Boys";
}


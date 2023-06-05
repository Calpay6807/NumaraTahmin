/*
oyunun fonksiyonları
oyuncunuın min ve max değerleri arasında olan sayi tahmini
oyunu bilirli tahmin hakki var
oyuncunun kazanma bildirimi var
tekrar denemesi için bir seçenek

*/
const game = document.querySelector("#game"),
 guessBtn = document.querySelector("#guess-btn"),
 guessInput = document.querySelector("#guess-input"),
 message = document.querySelector(".message"),
 minNum = document.querySelector(".min-num"),
 maxNum = document.querySelector(".max-num");


// console.log(game,guessBtn,guessInput,message)


//Oyunda kullanilacak değerler

let min = 1,
max =10,
winningNumber = getRandomNum(min,max),
guessesLef = 3;


minNum.textContent = min;
maxNum.textContent = max;

//Yapılan tahmni izle

guessBtn.addEventListener("click", ()=> {
   let guess = parseInt(guessInput.value);
//    console.log(guess)

  if(guess === winningNumber){
    //oyunu kazandin
    // alert("tebrikler kazndi")
    gameOver(true /* `KAZANDİN doğru Tahmin: ${winningNumber}`*/)
  }else{
    //yanliş tahmin ve hakkin azalmasi
    guessesLef--;
    if(guessesLef === 0){
        //oyunu kaybetti

        gameOver(false  /*`KAYBETTİN Doğru Tahmin: ${winningNumber}`*/)
    }else{
        //kalan hak 0 dan fazla ise
        //çerçeveyi kirmiz yap
        guessInput.style.borderColor = "red"
        
        //inputu temizleme
        guessInput.value = ""

        //kullaniciya kaç mesaj kaldiğini söyle

        setMessage(`${guess} doğru değil, ${guessesLef}`,'red')
    }
  }

} )

//oyunu bitirme

function gameOver(won,msg){
    let color = won ? "green" : "red"

    //input iptal et
    guessInput.disabled = true

    //inputun çerçevesini değiştir
    guessInput.style.borderColor = color

    setMessage(msg)

    if(won){
        //kazandı
        setMessage(`KAZANDİN Doğru tahmin: ${winningNumber}`)
    }else{
        //kaybettiniz
        setMessage(`KAYBETTİN Doğru tahmin: ${winningNumber}`)
    }
}

//kullaniciya mesaj verme

function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;    
}

//Rastgele Sayi Bulma Methodu

function getRandomNum(min,max){

  let random = Math.floor(Math.random() * (max - min + 1) + min)
   console.log(random);

   return random
}

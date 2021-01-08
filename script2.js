function getRaiting() {

    let howManyStars = prompt('What star rating would you give, 1-5?')
    while (howManyStars < 1 || howManyStars > 5){
        howManyStars = prompt('Incorrect! Please enter number from 1 to 5')
    }
    for (let i = 0; i < howManyStars; i++) {
    
        document.write('<img id = "stars" src = img/star.png>')   
    }

}



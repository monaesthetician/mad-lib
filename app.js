function createParagraph(){
    var wordOne = document.getElementById('year1').value;
    var wordTwo = document.getElementById('adj1').value;
    var wordThree = document.getElementById('noun1').value;
    var wordFour = document.getElementById('adj2').value;
    var wordFive = document.getElementById('adj3').value;
    var wordSix = document.getElementById('food1').value;
    var wordSeven = document.getElementById('food2').value;
    var wordEight = document.getElementById('verb1').value;
    var wordNine = document.getElementById('pluralNoun1').value;
    var wordTen = document.getElementById('number').value;
    var wordEleven = document.getElementById('year2').value;
    var wordTwelve = document.getElementById('famousPerson').value;
    var wordThirteen = document.getElementById('month').value;
    var wordFourteen = document.getElementById('pluralNoun2').value;
    var wordFifteen = document.getElementById('pluralNoun3').value;
    var wordSixteen = document.getElementById('noun2').value;
    var wordSeventeen = document.getElementById('noun3').value;
    var wordEighteen = document.getElementById('noun4').value;
    var wordNineteen = document.getElementById('noun5').value;
    var wordTwenty = document.getElementById('adj4').value;
    var wordTwentyOne = document.getElementById('food3').value;

    var paragraph =' <p> The first Thanksgiving was held in ' + wordOne + ' when the pilgrims and Indians came together for a ' + wordTwo + ' meal to  celebrate their first ' + wordThree + ' in America. It was ' + wordFour + ' ! the Indians brought' + wordFive +' and' + wordSix + ' to the festivities, and the pilgrims ' + wordSeven + ' ' + wordEight +' for everyone. The feast lasted for ' + wordNine + ' days! In ' + wordTen + ' , president ' + wordEleven + ' declared the 4th Thursday of ' + wordTwelve + ' as a day of ' + wordThirteen + ' and ' + wordFourteen + ' and called it Thanksgiving. Modern Thanksgiving celebrations usually include cooking a large ' + wordFifteen + ' with stuffing and ' + wordSixteen + ' sauce, ' + wordSeventeen + ' pie, and ' + wordEighteen + ' games on television. My favourite thing about Thanksgivingis the ' +wordNineteen + ' ' + wordTwenty + ' - what about you?</p>; '

   document.getElementById('answer').innerHTML = paragraph;


}
var startBtn = document.getElementById("js-startBtn"),
    addBtn = document.getElementById("js-addBtn"),
    sortBtn = document.getElementById("js-sortBtn"),
    unsorted = document.getElementById("unsortedWords"),
    sorted = document.getElementById("sortedWords"),
    i = 0,
    unsortedTable = new Array,
    alphabet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "ą", "b", "c", "ć", "d", "e", "ę", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ń", "o", "ó", "p", "q", "r", "s", "ś", "t", "u", "v", "w", "x", "y", "z", "ż", "ź",];

page.style.display = "none";

startBtn.addEventListener("click", function() {
    page.style.display = "block";
    header.style.display = "none";
    }
);

    //Adding new words

addBtn.addEventListener("click", function () {
    word = document.createElement('li');

    word.innerHTML = prompt("Dodaj słowo");
    unsortedTable[i] = word.innerHTML;
    unsorted.appendChild(word);
    i++;
    }
);

function getIndex(indexWord, number) {
    return alphabet.indexOf(indexWord.toLowerCase().charAt(number));
};

sortBtn.addEventListener("click", function () {
    sorting();
    writeSortedWords()
    }
);


    //Sorting

function sorting() {
    var swapValue,
        z = 0;
        n = unsortedTable.length;

    for(var k = 0; k < (n - 1); k++) {
        for (var j = 0; j < (n - 1); j++) {
            if (unsortedTable[j].toLowerCase != unsortedTable[j + 1].toLowerCase) {
                while ((getIndex(unsortedTable[j], z)) == (getIndex(unsortedTable[j + 1], z))){
                    z++
                }
            }
            if((getIndex(unsortedTable[j], z)) > (getIndex(unsortedTable[j + 1], z))) {
                swapValue = unsortedTable[j];
                unsortedTable[j] = unsortedTable[j + 1]; 
                unsortedTable[j + 1] = swapValue;
            }
        z = 0;
        }
    }
};

    //Writing sorted words

function writeSortedWords() {
    var m = unsortedTable.length;

    function writeWords() {
        for (var l = 0; l < m; l++) {                             
            word = document.createElement('li');        
            word.innerHTML = unsortedTable[l];
            word.setAttribute("id", "list");
            sorted.appendChild(word);
        }
    }  
    
        //Clearing sorted list and writing updated

    while (sortedWords.lastChild.id !== 'sortedHeader') {
        sortedWords.removeChild(sortedWords.lastChild);
    }
    writeWords();
}
    




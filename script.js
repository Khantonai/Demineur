function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

var scares = [
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
];

var alreadyBomb = []
var flagNumber = []



var gridContainer = document.querySelector(".grid-container");

for (var i in scares) {
    var caseGrid = document.createElement("div");
    caseGrid.id = "case" + i;
    caseGrid.setAttribute("onclick", "clickOnScare(" + i + ")");
    caseGrid.setAttribute("oncontextmenu", "markBomb(" + i + ")");
    caseGrid.setAttribute("style", "background-color:lightgray;")
    gridContainer.appendChild(caseGrid);
};











function empty(i) {
    document.querySelector("#case" + i).style.backgroundColor = "white"

    //haut
    if (scares[i - 9] != undefined) {
        document.querySelector("#case" + (i - 9)).style.backgroundColor = "white"
    }

    //bas
    if (scares[i + 9] != undefined) {
        document.querySelector("#case" + (i + 9)).style.backgroundColor = "white"
    }


    // bordure droite
    if ((i + 1) % 9 != 0) {


        //droite
        if (scares[i + 1] != undefined) {
            document.querySelector("#case" + (i + 1)).style.backgroundColor = "white"

        }

        //haut droite
        if (scares[i - 8] != undefined) {
            document.querySelector("#case" + (i - 8)).style.backgroundColor = "white"

        }

        // bas droite
        if (scares[i + 10] != undefined) {
            document.querySelector("#case" + (i + 10)).style.backgroundColor = "white"

        }

    }



    // bordure gauche
    if ((i - 1) % 9 != 8 && i != 0) {
        

        //gauche
        if (scares[i - 1] != undefined) {
            document.querySelector("#case" + (i - 1)).style.backgroundColor = "white"

        }

        //haut gauche
        if (scares[i - 10] != undefined) {
            document.querySelector("#case" + (i - 10)).style.backgroundColor = "white"
        }

        // bas gauche
        if (scares[i + 8] != undefined) {
            document.querySelector("#case" + (i + 8)).style.backgroundColor = "white"

        }

    }



}

function otherEmpty(i) {
    end = true
    
    //haut
    if (scares[i - 9] != undefined && document.querySelector("#case" + (i - 9)).style.backgroundColor == "white" && scares[i] == 0 && scares[i - 9] == 0) {
        empty(i)
        end = false
    }

    //bas
    if (scares[i + 9] != undefined && document.querySelector("#case" + (i + 9)).style.backgroundColor == "white" && scares[i] == 0 && scares[i + 9] == 0) {
        empty(i)
        end = false
    }


    // bordure droite
    if ((i + 1) % 9 != 0) {


        //droite
        if (scares[i + 1] != undefined && document.querySelector("#case" + (i + 1)).style.backgroundColor == "white" && scares[i] == 0 && scares[i + 1] == 0) {
            empty(i)
            end = false

        }
/*
        //haut droite
        if (scares[i - 8] != undefined && document.querySelector("#case" + (i - 8)).style.backgroundColor == "white" && scares[i] == 0 && scares[i - 8] == 0) {
            empty(i)
            end = false

        }

        // bas droite
        if (scares[i + 10] != undefined && document.querySelector("#case" + (i + 10)).style.backgroundColor == "white" && scares[i] == 0 && scares[i + 10] == 0) {
            empty(i)
            end = false

        }*/

    }



    // bordure gauche
    if ((i - 1) % 9 != 8) {


        //gauche
        if (scares[i - 1] != undefined && document.querySelector("#case" + (i - 1)).style.backgroundColor == "white" && scares[i] == 0 && scares[i - 1] == 0) {
            empty(i)
            end = false

        }
/*
        //haut gauche
        if (scares[i - 10] != undefined && document.querySelector("#case" + (i - 10)).style.backgroundColor == "white" && scares[i] == 0 && scares[i - 10] == 0) {
            empty(i)
            end = false
        }

        // bas gauche
        if (scares[i + 8] != undefined && document.querySelector("#case" + (i + 8)).style.backgroundColor == "white" && scares[i] == 0 && scares[i + 8] == 0) {
            empty(i)
            end = false

        }*/

    }
    /*
    if (scares[i] == 0 && document.querySelector("#case" + i).style.backgroundColor == "white") {
        empty(i)
        end = false
    }*/

    return end

}

aa = true

function clickOnScare(indexScare) {

    if (aa == true) {
        while (alreadyBomb.length < 10) {
            bomb = getRandomInt(scares.length);
            if (alreadyBomb.indexOf(bomb) == -1 && bomb != indexScare && bomb -1 != indexScare && bomb +1 != indexScare && bomb -8 != indexScare && bomb -9 != indexScare && bomb -10 != indexScare && bomb +8 != indexScare && bomb +9 != indexScare && bomb +10 != indexScare) {
                alreadyBomb.push(bomb)
                scares[bomb] = -1
            }
        }

        for (var i = 0; i < scares.length; i++) {
            if (scares[i] == -1) {
        
                //haut
                if (scares[i - 9] != -1 && scares[i - 9] != undefined) {
                    scares[i - 9]++
                }
        
                //bas
                if (scares[i + 9] != -1 && scares[i + 9] != undefined) {
                    scares[i + 9]++
                }
        
        
                // bordure droite
                if ((i + 1) % 9 != 0) {
        
        
                    //droite
                    if (scares[i + 1] != -1 && scares[i + 1] != undefined) {
                        scares[i + 1]++
                    }
        
                    //haut droite
                    if (scares[i - 8] != -1 && scares[i - 8] != undefined) {
                        scares[i - 8]++
                    }
        
                    // bas droite
                    if (scares[i + 10] != -1 && scares[i + 10] != undefined) {
                        scares[i + 10]++
                    }
        
                }
        
                // bordure gauche
                if ((i - 1) % 9 != 8) {
        
        
                    //gauche
                    if (scares[i - 1] != -1 && scares[i - 1] != undefined) {
                        scares[i - 1]++
                    }
        
                    //haut gauche
                    if (scares[i - 10] != -1 && scares[i - 10] != undefined) {
                        scares[i - 10]++
                    }
        
                    // bas gauche
                    if (scares[i + 8] != -1 && scares[i + 8] != undefined) {
                        scares[i + 8]++
                    }
        
                }
        
        
        
                /*
                if (scares[i - 9] != -1 && scares[i - 9] != undefined) {
                    scares[i - 9]++
                    var caseBomb = document.createElement("div");
        
                    document.getElementById("case" + (i-9)).appendChild(caseBomb);
                }*/
        
            }
        
            var flag = document.createElement("div");
            document.getElementById("case" + i).appendChild(flag);
        }

        aa = false

    }

    if (document.querySelector("#case" + indexScare).style.backgroundColor != "white") {
        if (scares[indexScare] == 0) {
            empty(indexScare)
            endWhile = false

            while (endWhile == false) {
                for (var j = scares.length; j > 0; j--) {
                    otherEmpty(j)
                    if (otherEmpty(j) == true) {
                        endWhile = true   
                    }
                }
            }

            endWhile = false

            while (endWhile == false) {
                for (var j = 0; j < scares.length; j++) {
                    otherEmpty(j)
                    if (otherEmpty(j) == true) {
                        endWhile = true   
                    }
                }
            }
            
        }
        else if (scares[indexScare] == -1) {
            alert("perdu")
            window.location.reload();
        }
        else {
            document.querySelector("#case" + indexScare).textContent = scares[indexScare]
            document.querySelector("#case" + indexScare).style.backgroundColor = "white"
        }


        list = []

        for (var i = 0; i < scares.length; i++) {
            if (scares[i] != -1 && scares[i] != 0 && document.querySelector("#case" + i).style.backgroundColor == "white") {
                document.querySelector("#case" + i).innerHTML = scares[i]
            }

            if (document.querySelector("#case" + i).style.backgroundColor == "lightgray") {
                list.push(scares[i])
            }
        }

        if (list.length < 11) {
            alert("gagné")
        }

    }


}


function markBomb(indexScare) {

    if (document.querySelector("#case" + indexScare + " > div").style.backgroundColor == "red") {
        flagNumber.shift()
    }

    if (document.querySelector("#case" + indexScare + " > div").style.backgroundColor != "red" && flagNumber.length <10) {
        document.querySelector("#case" + indexScare + " > div").style.backgroundColor = "red"
        flagNumber.push(0)
    }
    else {
        document.querySelector("#case" + indexScare + " > div").style.backgroundColor = ""
    }

    

    event.preventDefault()
}
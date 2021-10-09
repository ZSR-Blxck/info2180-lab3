
window.onload = function board(){

	box = document.getElementById("board").children;

	for ( let i=0; i<box.length;i++){
		box[i].classList.add("class","square");	
		changeState();
		hover();
		}

}

let state = [];

function changeState(){
	let box = document.querySelectorAll("#board div");
    for (let i = 0; i < box.length; i++) {
        box[i].onclick = function() {

            if(state.length === 0 && box[i].innerHTML === "") {
                box[i].classList.add("square", "X");
                box[i].innerHTML = "X";
                state.push("X");
				whoWon();
				restartGame();

            }
            else {
                if (state[state.length - 1] === "X" && box[i].innerHTML === ""){
                    box[i].classList.add("square", "O");
                    box[i].innerHTML = "O";
                    state.push("O");
					whoWon();
					restartGame();
                   
                }
                else if (state[state.length - 1] === "O" && box[i].innerHTML === ""){
                    box[i].classList.add("square", "X");
                    box[i].innerHTML = "X";
                    state.push("X");
					whoWon();
					restartGame();
      

                }
            }
        }
    }

}


function hover(){
	box= document.getElementById("board").children;

	for(let i = 0; i < box.length; i++) {
		box[i].onmouseover= function(){
	  		box[i].classList.toggle("hover", true)
		}

		box[i].onmouseout = function(){
	  		box[i].classList.toggle("hover", false)
		}
		
	}
}

function whoWon(){
	let box = document.getElementById("board").children;

	 if (box[0].textContent !== "" && box[0].textContent === "X" && box[1].textContent === "X" && box[2].textContent === "X") {
	        document.getElementById("status").classList.add("you-won");
	        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
	    }
	     if (box[3].textContent !== "" && box[3].textContent === "X" && box[4].textContent === "X" && box[5].textContent === "X") {
	        document.getElementById("status").classList.add("you-won");
	        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
	    }

	     if (box[3].textContent !== "" && box[3].textContent === "X" && box[4].textContent === "X" && box[5].textContent === "X") {
	        update.classList.add("status.you-won::before", "status", "you-won", "#status.you-won::after");
	        update.innerHTML = "Congratulations! X is the Winner!";
	    }
	     if (box[6].textContent !== "" && box[6].textContent === "X" && box[7].textContent === "X" && box[8].textContent === "X") {
	        document.getElementById("status").classList.add("you-won");
	        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
	    }
	     if (box[2].textContent !== "" && box[2].textContent === "X" && box[4].textContent === "X" && box[6].textContent === "X") {
	        document.getElementById("status").classList.add("you-won");
	        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
	    }
	     if (box[0].textContent !== "" && box[0].textContent === "X" && box[4].textContent === "X" && box[8].textContent === "X") {
	        document.getElementById("status").classList.add("you-won");
	        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
	    }
	     if (box[0].textContent !== "" && box[0].textContent === "X" && box[3].textContent === "X" && box[6].textContent === "X") {
	        document.getElementById("status").classList.add("you-won");
	        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
	    }
	     if (box[1].textContent !== "" && box[1].textContent === "X" && box[4].textContent === "X" && box[7].textContent === "X") {
	        document.getElementById("status").classList.add("you-won");
	        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
	    }
	     if (box[2].textContent !== "" && box[2].textContent === "X" && box[5].textContent === "X" && box[8].textContent === "X") {
	        document.getElementById("status").classList.add("you-won");
	        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
	    }
	      if (box[0].textContent !== "" && box[0].textContent === "O" && box[1].textContent === "O" && box[2].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (box[3].textContent !== "" && box[3].textContent === "O" && box[4].textContent === "O" && box[5].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (box[6].textContent !== "" && box[6].textContent === "O" && box[7].textContent === "O" && box[8].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (box[2].textContent !== "" && box[2].textContent === "O" && box[4].textContent === "O" && box[6].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (box[0].textContent !== "" && box[0].textContent === "O" && box[4].textContent === "O" && box[8].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (box[0].textContent === "O" && box[0].textContent !== "" && box[3].textContent === "O" && box[6].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (box[1].textContent !== "" && box[1].textContent === "O" && box[4].textContent === "O" && box[7].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (box[2].textContent !== "" && box[2].textContent === "O" && box[5].textContent === "O" && box[8].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
}

function restartGame(){
	document.getElementsByClassName("btn")[0].addEventListener("click", function(){
        window.location.reload(true);
    });
}
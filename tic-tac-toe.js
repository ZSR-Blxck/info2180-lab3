
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

            }
            else {
                if (state[state.length - 1] === "X" && box[i].innerHTML === ""){
                    box[i].classList.add("square", "O");
                    box[i].innerHTML = "O";
                    state.push("O");
                   
                }
                else if (state[state.length - 1] === "O" && box[i].innerHTML === ""){
                    box[i].classList.add("square", "X");
                    box[i].innerHTML = "X";
                    state.push("X");
      

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


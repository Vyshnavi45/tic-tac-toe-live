let boxes = document.querySelectorAll(".box");
let message = document.querySelector("#msg");
let div = document.querySelector("#my_id");
let resetbutton=document.querySelector("#reset_button");
let winningarray = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let turno = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

let checkwinner = () => {
    for (let pattern of winningarray) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                show_winner(pos1);
                disable_boxes();
                return;
            }
        }
        if (Array.from(boxes).every((box) => box.innerText !== "")) {
            message.innerText = "It's a draw!";
            div.style.display = "block";
            disable_boxes();
        }
        
    }
};
let show_winner = (winner) => {
    message.innerText =` Congratulations! The winner is ${winner}`;
    div.style.display = "block";
};
let disable_boxes=()=>{
     boxes.forEach((box)=>{
          box.disabled=true;
     });
};
resetbutton.addEventListener("click",()=>{
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    message.innerText = "";
    div.style.display = "none";
    turno = true; 
})


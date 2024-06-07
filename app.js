let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".Reset");
let newBtn=document.querySelector(".new-btn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let count=0;
let turnX=true;

const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    let turnX=true;
    enableBox();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=> {
  box.addEventListener("click",()=>{
    if(turnX){
        box.classList.add("second");
        box.innerText="X";
        turnX=false;
    }else{
        box.classList.remove("second");
        box.innerText="O";
        turnX=true;
        
    }
    box.disabled=true; 
    count++;
    let win=checkWinner();

    if(count===9 && !win){
        msg.innerText=`Game Drawed`;
      msgcontainer.classList.remove("hide");
      disableBox();
    }
  });
});

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
    count=0;
};
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(Winner)=>{
    msg.innerText=`Congratulations, Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableBox();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
   let pos1Val= boxes[pattern[0]].innerText;
   let pos2Val= boxes[pattern[1]].innerText;
   let pos3Val= boxes[pattern[2]].innerText;
    
   if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
    if(pos1Val===pos2Val&&pos2Val===pos3Val){
        console.log("WINNER");
        showWinner(pos1Val);
    }
   }

}
}

reset.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);
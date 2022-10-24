console.log("Welcome this game")
let audioTurn = new Audio("ting.mp3")
let turn="X"
isgameover=false
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
let checkWin=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
]
//changeturn
const changeTurn =()=>{
    return turn === "X"? "0": "X"

}
//win logic
function  checkwinner(){
    checkWin.forEach(function(element){
    let  check=element.every(idx=> cells[idx].innerText==turn)
    if(check){
     alert(turn + " has win")
     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
    }
   
    })
}
//gamelogid
let cells=document.querySelectorAll(".cell")
Array.from(cells).forEach(function(cell){
      cell.addEventListener('click',function(){
          if(cell.innerText===''){
              cell.innerText=turn
              checkwinner()
              turn=changeTurn()
              audioTurn.play();
        
            
            if (!isgameover){
                document.getElementsByClassName("Info")[0].innerText  = "Turn for " + turn;
            } 
          }
      
        })

})

//reset
reset.addEventListener('click', ()=>{
    let cell1= document.querySelectorAll('.cell');
    Array.from(cell1).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    isgameover = false
    document.getElementsByClassName("Info")[0].innerText  = "Turn for " + turn;   
   document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

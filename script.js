const board = document.querySelector(".board")

let myColor = "black"

let random = false

let bool = false

let size = 27
populateBoard(size)






function populateBoard(size){
    
    let squares = board.querySelectorAll("div")
    
    if(squares.length>0){
        squares.forEach((div) => div.remove())
    }
    

    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`


    for(let i=0; i<(size*size); i++){
            

            let square = document.createElement("div")
            // square.style.border = "0.5px solid grey"

            board.addEventListener("mousedown",()=>{
                bool = true
                // console.log("bool = true")
               
            })
            board.addEventListener("mouseup", ()=>{
                bool = false
                // console.log("bool = false")
            })

            
            
            square.addEventListener("mouseover", ()=>{
                if(random && bool){
                    let R = Math.floor((Math.random() * 255) + 0);
                    let G = Math.floor((Math.random() * 255) + 0);
                    let B = Math.floor((Math.random() * 255) + 0);

                    square.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
                    // console.log(`rgb(${R}, ${G}, ${B})`)
                }else if(bool){
                    square.style.backgroundColor = myColor
                }else{
                    square.style.backgroundColor = "none"
                }
                   
                
                
            })
            

        board.insertAdjacentElement("beforeend", square)
    }
    
}


const btnBorder = document.getElementById("btnBorder")

let border = true
btnBorder.addEventListener("click", ()=>{
    let squares = board.querySelectorAll("div")
    // if(btnBorder.value == "Border: ON"){
    //     squares.forEach(div => div.style.border = "0.5px solid grey")
    //     btnBorder.value = "Border: OFF"
    // }else{
    //     squares.forEach(div => div.style.border = "none")
    //     btnBorder.value = "Border: ON"
    // }
    if(border==true){
        squares.forEach(div => div.style.border = "0.1px solid gray")
        border=false
    }else{
        squares.forEach(div => div.style.border = "none")
        border=true
    }
    

})

const btnReset = document.querySelector("#btnReset")


btnReset.addEventListener("click", ()=>{
    let square = board.querySelectorAll("div")
    square.forEach(div => div.style.backgroundColor = "white")
})

const btnWhite = document.querySelector("#btnWhite")

btnWhite.addEventListener("click", ()=>{
    random = false
    myColor = "white"
    
})

const btnBlack = document.querySelector("#btnBlack")

btnBlack.addEventListener("click", ()=>{
    random = false
    myColor = "black"
    
})

const btnRandom= document.querySelector("#btnRandom")

btnRandom.addEventListener("click", ()=>{

    random = true
    
    
    console.log("random")
})

const btnRed = document.querySelector("#btnRed")

btnRed.addEventListener("click", ()=>{
    random = false
    myColor = "red"
    
})

const slider = document.getElementById("slider2")

slider.addEventListener("change",(val)=>{
    document.getElementById('textBox').innerHTML=`Size of the board: ${val}*${val} squares`; 
    
    populateBoard(val)
    console.log(`Size of the board: ${val}*${val} squares`)
})

// function updateTextInput(val) {
//     document.getElementById('textInput').innerHTML=`Size of the board: ${val}*${val} squares`; 
//     size = val
//     populateBoard(size)
//   }
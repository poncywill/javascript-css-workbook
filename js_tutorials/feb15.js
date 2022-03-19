// s2="  java script   "
// console.log(s2.valueOf())
// console.log(s2)
// console.log(s2.length)
// console.log(s2.trim())
// console.log(s2.trim().length)
 

function checkif(){
    let str=""

    let txt=document.getElementById("t1").value
    let letter=document.getElementById("t2").value
    let start=txt.indexOf(letter)
    let end=txt.lastIndexOf(letter)
    let str=`letter ${letter} is found @ index `
    str+= " "+ start

    if(start==-1){
       alert(`${letter} not found`)
    }
    else if(start!=end){
        let count=""
    }
      
            
       
}

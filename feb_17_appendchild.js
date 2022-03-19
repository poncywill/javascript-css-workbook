let count=0

function addContent(){
    count++
    let obj=document.createElement("p")
    obj.innerText="this is my dynamic paragraph"
    obj.style.color="red"
    document.getElementById("mydiv").appendChild(obj)  

    let obj1=document.createElement("input") 
    obj1.value="john"
    obj1.type="text"
    obj1.name="fname"
    
    document.getElementById("mydiv").appendChild(obj1)


   

}
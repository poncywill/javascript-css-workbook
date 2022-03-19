function flipImg(){

    // document.getElementById("myimg").src="she.jpg";
    console.log(document.getElementById("myimg").src)
    if(document.getElementById("myimg").src=="http://127.0.0.1:5500/he1.jpg"){
        document.getElementById("myimg").src="http://127.0.0.1:5500/she.jpg"
        
    }
    else{
        document.getElementById("myimg").src="http://127.0.0.1:5500/he1.jpg"
    }
  

     
}
// function ccc(){
//     document.getElementById("she").src="myimg";
// }
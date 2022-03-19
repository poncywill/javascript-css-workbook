let arr=[]
console.log(arr,typeof arr)
let arr1=new Array()
console.log(typeof arr1)
let names=["poncy","nissy","jia","betty","vineeth"]
console.log(names);

//to add value..objects are mutable(can change value)

names.push("nikhil") //to add value in tail end
console.log(names);
names.unshift("bibin") //to add value in head end
console.log(names);
names.pop()  //to remove
console.log(names);
names.shift() //to remove
console.log(names);
names.splice(2) //from 2nd index it removes all
console.log(names);
names.splice(2,2) //exact removal of element  , delete count 
console.log(names);
names.splice(2,1,"remo") // 2nd index il 1 value insert avunnu after removing previous value
console.log(names);
console.log(names.length);
console.log(names.indexOf("remo"));
console.log(names.lastIndexOf("remo"))
console.log(names.concat["a","b","c"]);
names.sort()
console.log(names);
names.reverse()
console.log(names);
let s=" hi hello how are u?"




let words=s.split(",")//split cheyyanulla condition 
console.log(words);

//array ne string aakkaan
console.log(names.join(" "))
let names_sub=names.slice(1,5)
console.log(names_sub)
console.log("**************************")

let peru=["jia","ria","pia","hazzel","john","kiara","susan"]

for (let name of peru)
{
console.log(name)
}

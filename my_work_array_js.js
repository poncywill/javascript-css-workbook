let arr=[]
console.log(typeof arr);
let arr1=new Array()
console.log(arr1,typeof arr1);
let names=["poncy","nissy","vineeth",]
console.log(names);
names.push("nikhil")
console.log(names);
names.unshift("bibin")
names.push("jenicks")
names.push("athira")
names.push("rose")
names.push("rachel")

console.log(names);
names.pop()
console.log(names);
names.shift()
console.log(names);
// names.splice(2)
console.log(names);
names.splice(2,1)
console.log(names);
names.splice(2,1,"remo")
console.log(names);
names.length
console.log(names.length);
console.log(names.indexOf("remo"));
console.log(names.lastIndexOf("remo"));
names.push("remo")
console.log(names);
console.log(names.lastIndexOf("remo"));
let names_new=names.concat(["a","b","c"])
console.log(names_new);
names.sort()
console.log(names);
names.reverse()
console.log(names);
//************************** */
let s="hi how are you"
s.split(" ")
console.log(s);
let words=s.split(" ")
console.log(words);
console.log(words.reverse());
// v=words[0]+" " + words[1]+" " + words[2]+ " " +words[3]
// console.log(v);

for(let i=0;i<words.length ;i++){
    let v=words[i]+" "
    
    document.write(v);
   

}
let a="mango"
let b="banana"
let c=a+b
console.log(c);

let k1=["ab","cd","ef","gh","ku","jr","yu"]
console.log(k1);
console.log(k1.splice(2,1));
console.log(k1)



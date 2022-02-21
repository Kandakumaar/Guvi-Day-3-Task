var json=[{"name":"Kandakumaar","Age":"33","qualification":"MBA"},
            {"name":"Elakkiya","Age":"26","qualification":"BE"}]
            console.log("JSON Objects printing through for loop")
for(var i=0;i<json.length;i++)
{   
    console.log(json[i])
}
console.log("JSON Objects printing through forEach loop")
json.forEach((e)=> 
{
    
    console.log(e)
});
console.log("JSON Objects printing through for of loop")
for(var i of json)
{
    console.log(i)
}
console.log("JSON Objects printing through for in loop")
for(i in json)
{
    console.log(json[i])
}
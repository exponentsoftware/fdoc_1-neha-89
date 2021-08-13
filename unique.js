var arr =[];
while(arr.length < 7){
    var r = Math.floor(Math.random() * 9) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
 // const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
  const uniqueArray = arr.filter(unique)
  
  console.log(uniqueArray);
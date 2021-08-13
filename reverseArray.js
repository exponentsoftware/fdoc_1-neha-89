function reverseArray( arr ) {
    var arr1 = [];
  
    while( i = arr.pop() )
        arr1.push( i );
    
    return arr1;
  }
  console.log(reverseArray(["A", "B", "C"]));
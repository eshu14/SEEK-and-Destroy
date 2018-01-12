function destroyer(arr) {
  var index=0;
  if(arguments.length>1)
    {
      for(var i=0;i<arguments.length;i++)
      {
        while((index=arr.indexOf(arguments[i+1]))!=-1)
        {
  		  arr.splice(index,1);
        }
      }
    }
  
  return arr;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);

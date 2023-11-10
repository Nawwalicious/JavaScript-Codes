function makeUpperCase(str)
{
  // Code here
  
  let res='';
  for(let i=0;i<str.length;i++)
    {
      res=res.concat(res.toUpperCase(str[i]))
    }
  return res;
}

console.log(makeUpperCase("hello"))
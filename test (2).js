var countSheep = function (num)
{
  let res=''
  if(num!==0)
    {
      for(let i=0;i<num;i++)
      {
        res=res.concat("{i} sheep...")
      }
    }
  //your code here
  return res;
}
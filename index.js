// add solution here
function theBeatlePlay(musicians, instruments)
{
  const arr = []
  
  for (let i = 0, l = musicians.Length; i < l; i++)
  {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
    
   
  }
    
   return arr
}
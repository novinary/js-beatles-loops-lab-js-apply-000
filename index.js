// add solution here

/* --------------------------- theBeatlesPlay --------------------------------  */

function theBeatlesPlay(musicians, instruments)
{
  const array = []
  
  for (let i = 0, l = musicians.length; i < l; i++)
  {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
    
   return array
}


/* ---------------------------- johnLennonFacts -------------------------------  */
function johnLennonFacts(facts)
{
  const exclamationFacts = []
  
  let i = 0
  
  while (i < facts.length)
  {
    
    exclamationFacts.push(`${facts[i]}!!!`)
    
    i++
  }
  
  return exclamationFacts
  }
  
 
/* ---------------------------  iLoveTheBeatles --------------------------------  */
  function iLoveTheBeatles(n)
  {
    const array = []
    
    do 
    {
      array.push('I love the Beatles!')
      n++
    }
    while(n < 15)
    
    return array
    
  }
  
  
  
  
  
  
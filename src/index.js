module.exports = function check(str, bracketsConfig) {
const lifo = [];
const open = bracketsConfig.map(pair=> pair[0]);
const close = bracketsConfig.map(pair=> pair[1]);
const match = Object.fromEntries(bracketsConfig);
for(let symvol of str){
  if(open.includes(symvol)){
    if (close.includes(symvol)&& lifo[lifo.length-1]===symvol){
      lifo.pop();
    }
    else{
      lifo.push(symvol);
    }
    }
    else{
      if(lifo.length===0 || match[lifo.pop()] !==symvol){
        return false;
      }
    }
   
  }
  return lifo.length===0;
}


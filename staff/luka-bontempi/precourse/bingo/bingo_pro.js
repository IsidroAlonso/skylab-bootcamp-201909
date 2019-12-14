function rdmGen(){
    let number=Math.floor(Math.random()*(30-1)+1)
    return number
  }
  
function genticket(){
    let BC=[]
    let BCN=[]
    let bingoNumber={}
    for (let n=0;n<15;n++){
        bingoNumber={number: isMarked(BCN)[BCN.length-1], matched: false}
        BC.push(bingoNumber)
    }
    return BC
}
  
function match(t,n){
    for (let j=0;j<t.length;j++){
        if (t[j].number==n){
          t[j].matched=true
        }
    }
  return t
  }
  
  
function completed(ticket){
    for (let num=0;num<ticket.length;num++){
        if (ticket[num].matched!==true){
            return false
        }
    }
    return true
  }
  
function displayCard(t){
    display=[]
    for (let n=0;n<t.length;n++){
        if (t[n].matched==true){
          display+=t[n].number+'X '   
        }
        else {
          display+=t[n].number+'O '
          }
      }
    return display
  }
  
function countline(t,n){
    count=0
    for (let i=(n-1)*5;i<5*n;i++){
        if (t[i].matched==true){
            count++
        }
    }
    return count
}
  
function isMarked(a){
    n=rdmGen()
    if (a.includes(n)){
        a=isMarked(a)
        return a
    }
    else {
        a.push(n)
        return a
    }
}
  
function bingo(){
    let user=prompt('User name:','User')
    let card=genticket()
    alert(displayCard(card))
    let turns=0
    let lines=[]
    let marked=[]
    for (let l=0;l<card.length/5;l++){
        lines.push(0)
    }
    while (completed(card)!==true){
        if (confirm('next turn?')){
            turns++
            marked=isMarked(marked)
            len=marked.length
            rdn=marked[len-1]
            alert(rdn)
            card=match(card,rdn)
            alert(displayCard(card))
            for (let n=1;n<lines.length+1;n++){
                line=countline(card,n)
                if (lines[n-1]<5 && line==5){
                lines[n-1]=line
                    if (completed(card)!==true){
                        alert('Line!')
                    }
                }
                else {
                    lines[n-1]=line
                }
            }
        }
        else {
              break
        }
    }
    if (completed(card)==true){
        alert('Bingo!! You have completed your card in '+turns+' turns!')
        if (confirm('Play again?')){
            bingo()
        } 
        else{
            alert('Ciao!')
        }
    }
    else{
        alert('See you soon!')
        if (confirm('Play again?')){
            bingo()
        }
        else{
            alert('Ciao!')
        }
    }  
}
bingo()
  
function sum(nums){
  let results=0
  for (num in nums){
    numero=parseFloat((nums[num]),10)
    results+=numero
  }
  return results.toFixed(3)
}

function mult(nums){
  let results=1
  for (num in nums){
    numero=parseFloat((nums[num]),10)
    results*=numero
  }
  return results.toFixed(3)
}

function div(nums){
  let results=nums[0]*nums[0]
  for (num in nums){
    numero=parseFloat((nums[num]),10)
    results/=numero
  }
  return results.toFixed(3)

}

function subs(nums){
  let results=nums[0]*2
  for (num in nums){
    numero=parseFloat((nums[num]),10)
    results-=numero
  }
  return results.toFixed(3)
}

  
function calculator_pro(){
  alert('Welcome to calculator! Lets calculate!')
  let numbers=[]
  let number=0
  while (confirm('add a new number?')){
    number=parseFloat(prompt('Introduce new number:'),10)
    numbers+=number
  }
  for (let n=0;n<numbers.length-1;n++){
    if (isNaN(numbers[n])) {
      message = 'Is not a number'
      alert(message)
      return message
    }
  }
  alert('The sum is : ' + sum(numbers))
  alert('The substraction is : ' + subs(numbers))
  alert('The multiplication is : ' + mult(numbers))
  alert('The division is : ' + div(numbers)) 
}
calculator_pro()
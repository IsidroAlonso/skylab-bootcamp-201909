var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

function airlines(){

    let username = prompt("what's your urser name?",'Carli')
    alert('Welcome to British Airlines '+username);
    let sentences=''
    let sentence=''
    let totalprice=0
    let averageprice=0
    let scalecounter=0
    let lastflights=''
    let sentence2=flights[flights.length-5].to
    for (let id=0; id<flights.length;id++){
        sentence='Flight from '+flights[id].from+' to '+flights[id].to+' has a cost of '+flights[id].cost+'€'
        totalprice+=flights[id].cost
        if (flights[id].scale){
            sentence+=' and has one or more scales'
            scalecounter++
        }
        else{
            sentence+=' and has no scales'
                }

        if (id>flights.length-5) {
            lastflights=flights[id].to
            sentence2+='\n'+lastflights
        }
        sentences+='\n'+sentence
        }
    averageprice=Number((totalprice/flights.length).toFixed(2))
    alert(sentences)
    alert('The Average Price is ' + averageprice+'€')
    alert('There are '+scalecounter + 'flights with scales')
    alert('Last 5 flights are: ' + '\n' + sentence2)
    let user=prompt('Are you User or Admin?','User')
    if (user===Admin){

    }
}
function admin(flights){
    let password = prompt('What is your password?')
    if (password==='1234'){   
        if (confirm('do you wish to introduce a new flight?')){
            iden=flights[flights.length-1].id+1
            destination=prompt('Introduce Destination:')
            origin=prompt('Introduce Origin:')
            price=prompt('Introduce Cost:')
            scales=prompt('Introduce Scale:')
            flight={id : iden,
            to : destination,
            from : origin,
            cost : price,
            scale : scales}
            flights.push(flight)
        }
    } 
}
airlines()
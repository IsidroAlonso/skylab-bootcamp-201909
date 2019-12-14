//Bingo Game.

//const MAX_NUM_RND=99;
//Declaration a object bingo card basic
var oemBingoCardBasic = [
    { number: 55, matched: false },
    { number: 11, matched: false },
    { number: 3, matched: false },
    { number: 73, matched: false },
    { number: 32, matched: false }  
];

var nuevoArray = new Array(5);
nuevoArray[0] = new Array(5);
nuevoArray[1] = new Array(5);
nuevoArray[2]= new Array(5);

// drclaration array with users
var user=[{name:"", points: 0,}];
var isMached=0;
var numBalls=0; // permet porta un control de la quantitat de boles per tal de fer el calcul de punts
var version;
var machedLine=false;
var machedBingo=false;
var guessLineyet=0; 

//Permite clonar un objeto
function clone( obj ) {
    if ( obj === null || typeof obj  !== 'object' ) {
        return obj;
    }
 
    var temp = obj.constructor();
    for ( var key in obj ) {
        temp[ key ] = clone( obj[ key ] );
    }
 
    return temp;
}

function cardBingo(arrBingo){
    var z=0;
    auxRnd=getNumRandom(15);
    for(i=0;i<3;i++){
        for (j=0; j<5;j++){
            arrBingo[i][j]={number: auxRnd[z], mached: false}; 
            z++;
        }
    }
    return arrBingo;   
}


//Function to generate a number random
function getNumRandom(lenghtOfArr){
    var numRndArr=[];
    while(numRndArr.length<lenghtOfArr){
        var auxNum=Math.floor((Math.random()*99)+1);
        if (numRndArr.indexOf(auxNum)==-1){
            numRndArr.push(auxNum);
        };       
    };
    return numRndArr;
};



function printCard(objCard,version){
    
        if(version== 'b'){
                console.log(objCard[0].number + " "+ objCard[1].number + " "+ objCard[2].number + " "+ objCard[3].number + " "+ objCard[4].number);
        }else if(version=='p'){
                console.log(objCard[0][0].number + " "+ objCard[0][1].number + " "+ objCard[0][2].number + " "+ objCard[0][3].number + " "+ objCard[0][4].number);
                console.log(objCard[1][0].number + " "+ objCard[1][1].number + " "+ objCard[1][2].number + " "+ objCard[1][3].number + " "+ objCard[1][4].number);
                console.log(objCard[2][0].number + " "+ objCard[2][1].number + " "+ objCard[2][2].number + " "+ objCard[2][3].number + " "+ objCard[2][4].number);
        }
    
}

function newNumber(objCard,numBall){
    var numDrum=getNumRandom(numBall);
    points=0;
       
    console.log("///////////////////////////");
    
      //select type of play, basic bingo or PRO
        if(version=="b"){
            for (z=0; z<numDrum.length;z++){
                alert("the number of drum is: "+ numDrum[z]);
                for(i=0; i<objCard.length;i++){
                    if (numDrum[z]==objCard[i].number){
                        objCard[i].matched=true;
                        objCard[i].number="X";
                        printCard(objCard,version);
                    };
                };
                if(guesBingo(objCard)){
                    points=pointSystemLine(z);
                    getpointsUser(user,name,points);
                    break;
                };
            };

        }else if (version=="p"){
            for (z=0; z<numDrum.length;z++){
                alert("the number of drum is: "+ numDrum[z]);
                for(i=0; i<3;i++){  
                    for (j=0; j<5;j++){
                        if (numDrum[z]==objCard[i][j].number){
                            objCard[i][j].matched=true;
                            objCard[i][j].number="X";
                            printCard(objCard,version);
                            console.log("===================");
                        };
                    };
                };
                if(guesLine(objCard)){
                    if (guessLineyet==0){   
                        points=pointSystemLine(z);
                        getpointsUser(user,name,points);
                        console.log("You win a Line, and getting a " + points);
                        guessLineyet=1;
                    };
                };
                
                if(guesBingo(objCard)==true){
                    points=pointSystemBingo(z);
                    getpointsUser(user,name,points);
                    console.log("You win a Bingo, and getting a " + points);
                    break
                };
            };
        };
};


// set a new player if not exist
function namePlayer(arrayUser){
    
    var nameUser=prompt("Please, enter your name: ");
   
    if (arrayUser[0].name==""){
        arrayUser[0].name=nameUser;
        return arrayUser[0].name
    } else{
        
        if (findPlayer(arrayUser,nameUser)==false) {
            arrayUser.push({name:nameUser, points: 0});
            return arrayUser[arrayUser.length-1].name;
        }else if (findPlayer(arrayUser,nameUser)){
            return nameUser;
        };
    };
};

//Exist the player
function findPlayer(arrayUser,nameUser){
    var exist;
    for (var i=0; i<arrayUser.length;i++){
        if (arrayUser[i].name==nameUser){
            exist=true;
        }else{
            exist=false;
        };
    };
    return exist;
};

// find index user(player)
function findUserIndex(arrayUser,nameUser){
    var idx=0;
    for (i=0; i<arrayUser.length;i++){
        if (arrayUser[i].name==nameUser){
            idx==i;
        }else{
            idx=-1;
        };
    };
    return idx;
};

//Who is who, and set points
function getpointsUser(arrayUser,nameUser,points){
    
    if (findPlayer(arrayUser,nameUser)==true){
        var idx=findUserIndex(arrayUser,nameUser);
        if (idx!=-1){
            arrayUser[idx].points=arrayUser[idx].points+points;
        }else{
            console.log("not fined");
        };
    };

};

//Is it a line?
function guesLine(objCard){
    
    //var qtyMached=0; // he de poner dos contadores y compararlos
        for(i=0; i<3;i++){ 
            var qtyMached=0; 
            for (j=0; j<5;j++){ 
                if (objCard[i][j].matched==true){
                    qtyMached=qtyMached+1;
                };
                if (qtyMached==5){
                    machedLine=true;
                };
                
            };
        };  
   return machedLine;
};

//Is it a bingo?
function guesBingo(objCard){
    var qtyMached=0;
    
        if (version=="b"){
            for (var i=0; i<objCard.length;i++){
                if (objCard[i].matched==true){
                    qtyMached=qtyMached+1;
                }
                if (qtyMached==5){ //if we have 5 elements mached,mean is a bingo
                    machedBingo=true;
                }
            }
        }else if (version=="p"){
            for(i=0; i<3;i++){  
                for (j=0; j<5;j++){
                    if (objCard[i][j].matched==true){
                        qtyMached=qtyMached+1;
                    }
                    if (qtyMached==15){
                        machedBingo=true;
                    };
                };
            };
        };
    return machedBingo;
};

//System points when  you do bingo
function pointSystemBingo(numPlays){
    var points;
    var auxN=(numPlays/10);
    var n=Math.round(auxN);
  
   if (numPlays>=30 && numPlays<=45){
        points=50;
    
   }else if(numPlays>=46 && numPlays<=55){
        points=(40-(n*2));
    
   }else if(numPlays>=56 && numPlays<=65){
        points=(30-(n*2));
   }else if (numPlays>66 && numPlays<75){
        points=(25-(n*2));
   }else{
    points=0;
   };
 
    return points;
};

//System points when you do line
function pointSystemLine(numPlays){
    var points;
    var auxN=(numPlays/10);
    var n=Math.round(auxN);
  
   if (numPlays>=15 && numPlays<=25){
        points=25;
    
   }else if(numPlays>=26 && numPlays<=35){
        points=(20-(n*2));
    
   }else if(numPlays>=36 && numPlays<=45){
        points=(15-(n*2));
   }else{
    points=0;
   };
 
    return points;
};
    
//Who have more points
function rancking(arrayUser){
    arrayUser.sort(function (a, b) {
        if (a.points < b.points) {
          return 1;
        }
        if (a.points > b.points) {
          return -1;
        }
        
        return 0;
      });
};

function printRanckingUser(arrayUser)
{
    rancking(arrayUser);
    console.log("****************************************************");
    console.log("*      Rancking of players                         *");
    console.log("****************************************************");
    for (i=0; i<arrayUser.length;i++){ 
        console.log(arrayUser[i].name + " " + arrayUser[i].points);
        console.log("-------------------------")
    };
};

function resetValues(){
    version="";
    machedLine=false;
    machedBingo=false
    guessLineyet=0;
};

function salir(arrayUser){
    var outBingo=confirm("Do you want go out of  Bingo?")
    if (outBingo==true){
        console.log("Goodbye ");
        printRanckingUser(arrayUser);
    }else{
        outBingo==false;
    };

    return outBingo
};




function play(){
    
    resetValues();
    version=prompt("Enter the version that you want play: basic=b; Pro=p");
    name=namePlayer(user);
   
    if (version=='b'){
        var bingoCardBasic=clone(oemBingoCardBasic);
        printCard(bingoCardBasic,version);
        newNumber(bingoCardBasic,99);

    }else if(version=="p"){
        var cardBingoPro=cardBingo(nuevoArray);
        printCard(cardBingoPro,version);
        newNumber(cardBingoPro,99);
    };
};

function Bingo(){
    var outBingo=false;
   
    while (outBingo!=true){
        play();
        outBingo=salir(user);
    };
};

Bingo();

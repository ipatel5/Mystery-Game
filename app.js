const inquirer = require('inquirer')
var colors = require('colors');
let obj = require('./words.js')

module.exports.run = (flags) => {

  
        var dashedline = "";
    
    
   
    if(flags.difficulty=='easy'){
        var j = Math.floor((Math.random() * 105) + 1);
    var random = obj.easy[j];
    
    }
     else{
         var j = Math.floor((Math.random() * 89) + 1);
        var random = obj.hard[j];
   
    }
    var guessed=[];
    var count = 0;
        
    for(let i=0;i<random.length;i++){
        dashedline= dashedline + '-'
    }
    
    
    mystery_game();




function mystery_game(){
    console.log('---------------Mystery Game-----------------------'.yellow+'\n')
    console.log(dashedline+'\n')
    console.log('--------------------------------------------------'.yellow)
   

    inquirer.prompt([{

            type: 'list',
            name: 'answer',
            message: 'What would you like to do?',
            choices: ['Guess the letter', 'Hint', 'View guessed letters','View how many guessed letters'],
           filter: function (val) {
                 return val.toLowerCase();
    }
    }]).then(function (answers) {
        
        if(answers.answer === 'guess the letter'){
            inquirer.prompt([{
             type: 'input',
            name: 'letter',
            message: 'Guess your letter:',
         }]).then(function (answers) {
        
            count++;
             guessed.push(answers.letter);
            for(let i=0;i<random.length;i++){
                if(random[i].toLowerCase()===answers.letter){  

                  if(i=0)
                    dashedline= dashedline.substr(0, i) + answers.letter.toUpperCase() + dashedline.substr(i + 1)
                  else
                  dashedline= dashedline.substr(0, i) + answers.letter + dashedline.substr(i + 1)
                  count--;
                }
                
            }

            if(count>3){
                console.log('---------------Game over----------------------------'.red+'\n')
                 console.log('--------------------answer:'.red+ random.red+'-----------------------'.red)
                          inquirer.prompt([{
             type: 'input',
            name: 'letter',
            message: 'Play Again?:',
         }]).then(function (answers) {
            if(answers.letter=='yes'){
              dashedline="";
              if(flags.difficulty=='easy'){
        var j = Math.floor((Math.random() * 105) + 1);
     random = obj.easy[j];
    
    }
     else{
         var j = Math.floor((Math.random() * 89) + 1);
         random = obj.hard[j];
   
    }
     guessed=[];
     count = 0;
        
    for(let i=0;i<random.length;i++){
        dashedline= dashedline + '-'
    }

                mystery_game()
            }

    })
            }
            else{
            //console.log(dash)
            if(random.toLowerCase()===dashedline.toLowerCase()){
               console.log('--------------------------------------------------'.yellow)
                console.log(random+'\n')
                console.log('---------------Congrats----------------------------'.green+'\n')

       inquirer.prompt([{
             type: 'input',
            name: 'letter',
            message: 'Play Again?:',
         }]).then(function (answers) {
            if(answers.letter=='yes'){
              dashedline="";
              if(flags.difficulty=='easy'){
        var j = Math.floor((Math.random() * 105) + 1);
     random = obj.easy[j];
    
    }
     else{
         var j = Math.floor((Math.random() * 89) + 1);
         random = obj.hard[j];
   
    }
     guessed=[];
     count = 0;
        
    for(let i=0;i<random.length;i++){
        dashedline= dashedline + '-'
    }

                mystery_game()
            }

    })


            }else{
            mystery_game();
        }
        }
          });
        }
        
            
        else if(answers.answer === 'hint'){
            var k = Math.floor((Math.random() * random.length-1) + 1);
            dashedline= dashedline.substr(0, k) + random[k] + dashedline.substr(k + 1)
            if(random.toLowerCase()===dashedline.toLowerCase()){
                 console.log('---------------Mystery Game-----------------------'.yellow+'\n')
                    console.log(dashedline+'\n')
                console.log('--------------------------------------------------'.yellow)
                console.log(random+'\n')
                console.log('---------------Congrats----------------------------'.green+'\n')
                 console.log('--------------------------------------------------'.green)
            }else{
            mystery_game();
        }
        }
        else if(answers.answer === 'view how many guessed letters'){
           let countguessletters=0;
            for(let i=0;i<guessed.length;i++){
           countguessletters=countguessletters+1;
}
            
            console.log('---------------Number of Guessed letters-----------------------'.blue+'\n')
        console.log(countguessletters)
        console.log('--------------------------------------------------'.blue)
            
            mystery_game();
        }


        else{
            let guessedletters='';
            for(let i=0;i<guessed.length;i++){
            guessedletters=guessedletters+" "+guessed[i];
        }
        console.log('---------------Guessed letters-----------------------'.blue+'\n')
        console.log(guessedletters.blue+'\n')
        console.log('--------------------------------------------------'.blue)
        mystery_game();
        }
});




}
}
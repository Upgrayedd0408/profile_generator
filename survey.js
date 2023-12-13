// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`)

    rl.question("What's your name? Nicknames are also acceptable :) ", (answer2) => {
      console.log(`Thank you for your valuable feedback: ${answer2}`)
  
        rl.question("What's an activity you like doing? ", (answer3) => {
          console.log(`Thank you for your valuable feedback: ${answer3}`)
    
            rl.question("What do you listen to while doing that? ", (answer4) => {
              console.log(`Thank you for your valuable feedback: ${answer4}`)
        
                rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer5) => {
                  console.log(`Thank you for your valuable feedback: ${answer5}`)
          
                    rl.question("What's your favourite thing to eat for that meal? ", (answer6) => {
                      console.log(`Thank you for your valuable feedback: ${answer6}`)
                
                        rl.question("Which sport is your absolute favourite? ", (answer7) => {
                          console.log(`Thank you for your valuable feedback: ${answer7}`)
                    
                            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer8) => {
                              console.log(`Thank you for your valuable feedback: ${answer8}`)
                              console.log(" ");
                              console.log(`Hello! My name is ${answer2}. In my spare time, I enjoy ${answer3} and listening to ${answer4}. My favourite meal is ${answer5} and my go-to is ${answer6}. I love to watch ${answer7}. My super power is ${answer8}`);
                        
                              rl.close();                    
                            });

                        });
                      
                    });
             
                });

            });
           
        });              
    
    }); 
    
});



const fs = require('fs');
const path = require('path');

fs.readFile('./TextFiles/Backend.txt', 'utf8', (err, back) => {
    if (err) {
        
            console.log(`There is an error:${err}`);
        
        return;
    }
    console.log(back);
});
fs.readFile('./TextFiles/Frontend.txt', 'utf8', (err , front) => {
  if(err) { 
    
        console.log(`There is an error:${err}`);
    
        return;}
    
    console.log(front)
});

fs.readFile('./TextFiles/Skills.txt','utf8',(err, skills) => {
    if(err){
      
        console.log(`There is an error ${err}`);
    
        return;
    }
    console.log(skills)

});



fs.readdir('./TextFiles', (err, files) => {
   
    const txtFiles = files.filter(file => path.extname(file) === '.txt');

    if (txtFiles.length === 0) {
        console.log(`No .txt files found in ${'./TextFiles'}`);
        return;
    }

    
});
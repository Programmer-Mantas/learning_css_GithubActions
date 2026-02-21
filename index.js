
const express = require('express');
const { readFile } = require('node:fs').promises;

const app = express();

app.use(express.static('public'));

// request - header or body
// app.get('/', (request, response) =>{

//     readFile('./home.html', 'utf8', (err,html) => {
        
//         if(err){
//             response.status(500).send('sorry not here at the moment')
//         }

//         response.send(html);
//     })


// });

app.get('/', async(request, response) => {
    
    response.send( await readFile('./home.html', 'utf8'));
})

app.listen(process.env.Port || 3000, () => console.log(`App avaiable on http://loacalhost:3000`))



   







// console.log(process.env);


/////////////////


// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter

// eventEmitter.on('lunch', () => {

//     console.log('yum')
// })

// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');

/////////////

// const { readFile, readFileSynch, read } = require('fs');

// const txt = readFileSynch('./hello.txt', 'utf8');
// console.log(txt)

// readFile('./hello.txt', 'utf8', (err,txt) =>{
//     console.log(txt)
// })

// console.log('outputs this first even tho it is written later in the code')


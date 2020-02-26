const fs = require("fs");

exports.loadJson = function(search)
{
    let i = 0
    fs.readFile('./assets/nasa-meteorites.json', (err, data) => {
        if(err){
            throw err;
        }
        var readData = JSON.parse(data);

        return JSON.stringify(readData);
    });
};

let searched = "L6";
let searched2 = "1951-01-01T00:00:00.000";
let i=0;
let j=0;

function searchClass(){
    fs.readFile('./assets/nasa-meteorites.json', (err, data) => {
        if(err){
            throw err;
        }
        data = JSON.parse(data);
        
        for (x in data){
            if(data[x].recclass == searched){
                console.log(data[x].name);
                i++;
            }
        }
        console.log(i);
    });
};

function searchYear(){
    fs.readFile('./assets/nasa-meteorites.json', (err, data) => {
        if (err){
            throw err;
        }
        
        data = JSON.parse(data);

        for (x in data){
            if(data[x].year == searched2){
                console.log(data[x].name);
                j++;
            }
        }
        console.log(j);
    });
};



const path = require('path');

module.exports =
{
    entry: './src/index.js', //define entry point to application. Could also be an object for modularization do tomorrow. 
    output:
    {
        filename: 'main.js', // output compiles our javascript to the filename we chose
        path: path.resolve(__dirname, 'dist'),
    }
}
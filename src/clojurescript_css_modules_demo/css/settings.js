import header from './header.css';
import body from './body.css';


export {
    header, body
}

// The below code is an experiment to automagically import and namespace CSS Modules, so users don't need to update this file manually. Needs a bit of work, though.

//var controllers = require('require-all')({
//    dirname     :  __dirname,
//    recursive   : true
//});
//
//console.log(controllers);

//var fs = require('fs');
//
//var modules = [];
//
//fs.readdirSync(__dirname + '/').forEach(function(file) {
//    if (file.match(/\.css$/) !== null && file !== 'index.js') {
//        var name = file.replace('.css', '');
//        var filepath = './' + file;
//
//        modules.push({name: name, path: filepath});
//
//        //import name from filepath;
//
//        console.log(exports);
//
//        module.exports = {header: fs.readFileSync(__dirname + '/' + file, 'utf8')};
//
//        //console.log(fs.readFileSync(__dirname + '/' + file, 'utf8'));
//        //module.exports = fs.readFileSync('./' + file, 'utf8');
//    }
//});



//modules.forEach(function(i) {
//  import i.name from i.path;
//});

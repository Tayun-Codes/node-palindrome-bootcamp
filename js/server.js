const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    if (page == '/') {
        fs.readFile('../index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (page == '/api') {
        if ('palindrome' in params) {
            const input = params.palindrome
            // console.log(input, 'server input')
            checkPalindrome(input)
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const objToJson = {
                result: result
            };
            res.end(JSON.stringify(objToJson));
        }
    } else if (page == '/css/style.css') {
        fs.readFile('../css/style.css', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    } else if (page == '/js/main.js') {
        fs.readFile('main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    } else {
        res.end();
    }

});

server.listen(8000);

function checkPalindrome(input) {
    newInput = input.replaceAll(' ', '').toLowerCase();
    let reverse = newInput.split('').reverse().join('')
    if (reverse === newInput) {
        result = `"${input}" is a palindrome! Very cool.`
        return result
    } else {
        result = `Hmmm "${input}" is not a palindrome! But you know what is? "A man a plan a canal Panama", spiffy innit!`
        return result
        
    }
}
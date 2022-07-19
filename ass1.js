const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text-html');
        res.write('<html>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Create User</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/users') {
        res.setHeader('Content-Type', 'text-html');
        res.write('<html>');
        res.write('<body><ul><li>User1</li><li>User2</li><li>User3</li><li>User4</li></ul></body>')
        res.write('</html>');
        return res.end();
    }
    else if(req.url === '/create-user' && req.method === 'POST') {
        const data = [];
        req.on('data', (chunk) => {
            data.push(chunk);
        });
        return req.on('end', () => {
            const parsedData = Buffer.concat(data).toString();
            const userName = parsedData.split('=')[1];
            console.log(userName);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }
});

server.listen(5000);
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Meu Servidor</title>
                <style>
                    body {
                        font-family: Arial;
                        max-width: 800px;
                        margin: 50px auto;
                        text-align: center;
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        color: white;
                    }
                    .btn {
                        background: white;
                        color: #667eea;
                        padding: 10px 20px;
                        text-decoration: none;
                        border-radius: 5px;
                        display: inline-block;
                        margin: 10px;
                    }
                </style>
            </head>
            <body>
                <h1>🚀 Servidor Node.js</h1>
                <p>Rodando no Debian 13!</p>
                <a href="/sobre" class="btn">📖 Sobre</a>
                <a href="/contato" class="btn">📧 Contato</a>
                <p>✅ Servidor ativo na porta 3000</p>
            </body>
            </html>
        `);
    } else if (req.url === '/sobre') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Sobre</h1><p>Aprendendo Node.js no SENAC</p><a href="/">Voltar</a>');
    } else if (req.url === '/contato') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Contato</h1><p>Email: diego@email.com</p><a href="/">Voltar</a>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404</h1><p>Página não encontrada</p><a href="/">Voltar</a>');
    }
});

server.listen(3000, '0.0.0.0', () => {
    console.log('✅ Servidor rodando em http://localhost:3000');
    console.log('🔴 Pressione Ctrl+C para parar');
});

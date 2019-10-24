const restify = require('restify');
//const userRoutes = require('./src/users-routes')

const server = restify.createServer();
const PORT = 4000;

//settings
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())
//userRoutes.applyRoutes(server);

server.listen(PORT,()=>{
    console.log(`listen on ${server.name}`, server.url);
})
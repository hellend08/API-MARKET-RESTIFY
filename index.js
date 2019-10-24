const restify = require('restify');
const userRoutes = require('./main/routes/users/usersRoutes')

const server = restify.createServer();
const PORT = 4000;

//settings
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())
userRoutes.applyRoutes(server);

// server.put('/item/:id', (req, res) => {
//     const krowdy = users[parseInt(req.params.id)];
//     const act = req.body;
//     for (let field in act) {
//         krowdy[field] = act[field]
//     }
//     res.setHeader('Content-type', 'application/json')
//     res.writeHead(200);
//     res.end(JSON.stringify(krowdy))
// });

// server.del('/item/:id', (req, res, next) => {
// 	delete users('./Bd/db.js')[parseInt(req.params.id)];
// 	res.setHeader('Content-Type', 'application/json')
// 	res.writeHead(200)
// 	res.end(JSON.stringify(true));
// });


server.listen(PORT,()=>{
    console.log(`listen on ${server.name}`, server.url);
})
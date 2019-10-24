const {Users} = require('../../Bd/db');
const Route = require('restify-router').Router;

const usersRoutes = new Route()


usersRoutes.post('/users',(req,res,next)=>{
    try{
     //if(!name)
        Users.push({...req.body})
        res.end(JSON.stringify(Users)) 
        }catch(e){
            console.log(e)
        }
})

usersRoutes.get('/users',(req,res,next)=>{
    res.setHeader('Content-type', 'application/json')
    res.writeHead(200)
    res.end(JSON.stringify(Users))
});

/* usersRoutes.get('/users/:id',(req,res,next)=>{
    
    res.writeHead(201)
    const index = Object.keys(users).filter((index) =>  req.params.id === index)
    const user =users[index];

    if(!user){
        res.end(JSON.stringify({message: 'No existe esta persona'}))
    }
    res.end(JSON.stringify(user)) 
}); */

module.exports = usersRoutes;
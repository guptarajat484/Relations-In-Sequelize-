const user=require('../controller/user')
const post=require('../controller/post')

function api(app){

app.post("/users",user.postusers)
app.get('/users',user.getusers)
app.post('/post',post.postadd)
app.get("/post",post.getpost)

}
module.exports=api
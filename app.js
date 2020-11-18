const express=require('express');
const app=express();
const db=require('./queries');
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));




app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});


app.post('/',async(req,res)=>{
  let name=req.body.name;
  let email=req.body.email;
  let phone=req.body.phone;
  let address=req.body.address;

  let result=await db.enterData(name,email,phone,address);

  if(result==1){
    res.send("<h1 align='center'>Successfully added the data into the database<h1>");
  } else {
    res.send(" <h1 align='center'>The operation performed is unsuccessful<h1>");
  }
});





app.listen(3000,function(){
  console.log("Server has started on port 3000");
})

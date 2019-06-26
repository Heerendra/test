var express=require ('express');
var app=express();
var controller=function(req,res){
    console.log('Calling Rest API');
    var AllEntity=[
        {CustomerName:'Alex',Country:'USA',RegOffice:'Portland',AccountInfo:190241,ServiceProvider:'Mark',Status:true}
    ];
    res.send(AllEntity)
};
app.get('/custinfo',controller);
var server=app.listen(8080,function(){
    var host=server.address().address
    var port=server.address().port
    console.log('Server is Running At http://localhost:8080',host,port);
})

if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://erickadmin:20304767EsX!@cluster0-gtetd.mongodb.net/test?retryWrites=true&w=majority"}
}else{
    //AQUI SERIA O BANCO EM LOCALHOST MAS FIZ TUDO ONLINE, EX: "mongodb://localhost/blogapp"
    module.exports = {mongoURI: "mongodb+srv://erickadmin:20304767EsX!@cluster0-gtetd.mongodb.net/test?retryWrites=true&w=majority"}
}
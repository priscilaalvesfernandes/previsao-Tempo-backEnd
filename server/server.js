    const express = require("express")
    const tempRoutes = require("./query/routes") 

    const app = express()
    const port = 3500

    const cors=require("cors");
    const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
    

    app.use(express.json())

    //app.get("/api/tempapi", tempRoutes);
    app.get("/", (req,res)=>{ //funcao pra add algo ao nvegador
        res.send("Ola Mundo!!!"); //retornando algo no navegador
    });
    
    app.use("/api/tempapi", tempRoutes);
    

    app.listen(port,() => console.log(`app esta sendo esecutado na porta: ${port}`))


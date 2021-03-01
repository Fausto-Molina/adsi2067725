import express from 'express'
import cors from 'cors';
import dbConnection from './database/config.js';


class server{
    constructor(){
        this.port= process.env.port;
        this.app = express();

        this.conectarBD();

        this.middlewares();

        this.routes();
    }

     routes(){

     }

     async conectarBD(){
         await dbConnection();
     }


     middlewares(){
         this.app.use(express.json());
         this.app.use(cors());
         this.app.use(express.static('public'))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`servidor corriendo en el puerto ${this.port}`);
        
        });   

    }   
        

}
   export default server


     



    

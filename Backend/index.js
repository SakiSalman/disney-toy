import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

// init app
const app = express();
dotenv.config();
// Middlewares
app.use(cors());
app.use(express.json());
// Mongo DB Connect

const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.34jihpt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
  //  await client.connect((err) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //       } 
  //   });


    // find all databases
    const toy_server =client.db("toy-server").collection("toys");

    //get all data

    app.get('/toys', async (req, res) => {
      const limit = parseInt(req.query.limit);
      const sortField = req.query.sort;
      console.log("sortField", sortField);
      console.log("limit",limit);

      let sortOrder = req.query.order === 'asc' ? 1 : -1;

    
      const searchQuery = req.query.search;

    
      let query = toy_server.find();
    
      if (searchQuery) {
        query = toy_server.find({ name: { $regex: searchQuery, $options: 'i' } });
      }
    
      if (limit && limit > 0) {
        query = query.limit(limit);
      }
    
      const result = await query.sort({ [sortField]: sortOrder }).toArray();
      res.send(result);
    });
    

    //get single data
    app.get('/toys/:id',async(req,res)=>{
        const id=req.params.id;
        console.log(id);
        const ids =new ObjectId(id);
        const result= await toy_server.findOne({_id:ids});
        res.send(result);
    })

    // show user toys
    app.get('/mytoys', async(req,res)=>{
      let query={};
      console.log(req.query);
      console.log(req.query.email);
      if(req.query.email){
        query={sellerEmail:req.query.email}
      }
     const result= await toy_server.find(query).toArray();
    res.send(result);
    })
    
     //post data
     app.post('/toys',async(req,res)=>{
      const newToy=req.body;
        const result= await toy_server.insertOne(newToy);
        res.json(result);
    })

    // my toys delete
    app.delete('/toys/:id',async(req,res)=>{
      const id=req.params.id;
      const ids =new ObjectId(id);
      const result= await toy_server.deleteOne({_id:ids});
      res.send(result);
    })  

    //update data
    app.put('/toys/:id',async(req,res)=>{
      const id=req.params.id;
      const ids =new ObjectId(id);
      const updatedData=req.body;
      const options={upsert:true};
      const result= await toy_server.updateOne({_id:ids},{$set:updatedData},options);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// get all toys
app.get("/test", (req, res, next) => {
  res.send("working");
});

// Start Server listening
app.listen(5000, () => {
  console.log(`Server is running ${5000}`);

});

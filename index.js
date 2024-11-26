const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require("dotenv").config()

const app = express();

app.use(cors());
app.use(express.json())

const port = process.env.PORT || 5000



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zhxyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;



const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const coffeeCollecitn = client.db(`${process.env.DB_USER}`).collection("coffee");

    app.get("/coffee" , async (req,res) => {
      const result = await coffeeCollecitn.find();
      const data = await result.toArray();
      res.send(data)
    })

    app.post("/coffees", async(req,res) => {
      const data = req.body
      
      const result = await coffeeCollecitn.insertOne(data)

      res.send(result)
    })

    app.put("/coffees/:id", async (req,res) => {
      const id = req.params.id
      const newCoffee = req.body

      const filter = {_id : new ObjectId(id)};
      const update = { $set : newCoffee }

      const result = await coffeeCollecitn.updateOne(filter,update);
      res.send(result)
    })

    app.delete("/coffee/:id" , async (req,res) => {
      const id = req.params.id;

      const result = await coffeeCollecitn.deleteOne({_id : new ObjectId(id)})
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get("/",(req,res) => {
  res.send("COffee Server id Running")
})

app.listen(port,() => {
  console.log(`app Running at : ${port}`)
})
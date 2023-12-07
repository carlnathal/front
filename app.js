const express = require("express");
const path =require("path");
const PORT = 5000;

const app = express();

app.set("port", PORT);

app.use(express.static(path.join(__dirname, "kream/build")))

app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, "/kream/build/index.html"));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/kream/build/index.html'), function(err){
    if(err){
      res.status(500).send(err)
    }
  })
});

app.listen(PORT, ()=>{
  console.log(`server started on PORT ${PORT}`);
});
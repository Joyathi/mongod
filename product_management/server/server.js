
const { error } = require("console");
const express = require("express");
const app = express();
const port = 4000;
const fs = require("fs");
const path = require("path");

console.log(__dirname);

app.use("/", express.static(__dirname + "/../client"));


app.use(express.urlencoded({ extended: true }));


app.use(express.json());


app.get('/test',(req,res,next)=> {
  
  next();
},(req,res)=> {
  res.status(200).send("success1");
});

app.post("/submit", (req, res) => {
  const body = req.body;
  console.log("body : ", body);

  const folderPath = "./product";
  const filename = "product.json";
  const filePath = path.join(folderPath, filename);

  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  

  const fileContent = fs.readFileSync(filePath, "utf-8");
  console.log("fileContent : ", fileContent);
  console.log("typeof(fileContent) : ", typeof fileContent);

  if (fileContent === "") {
    console.log("File is empty");

   
    let dataArr = [];
    dataArr.push(body);

   
    let data = JSON.stringify(dataArr);
    console.log("data : ", data);

    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.log("err : ", error);
        res.status(400).send("failed");
      } else {
        console.log("Success");
        res.status(200).send("success");
      }
    });
  } else {
      let existingname = fileContent;
      console.log("existingname : ", existingname);

      let parsedname = JSON.parse(existingname);
      console.log("parsedname : ", parsedname);

      parsedDatas.push(body);

      let updatedproduct = JSON.stringify(parsedDatas);
   
    fs.writeFile(filePath, updatedproduct, (err) => {
      if (err) {
        console.log("err : ", error);
        res.status(400).send("failed");
      } else {
        console.log("Success");
        
        res.status(200).send("success");
      }
    });
  }

});

app.get('/getproduct',(req, res)=> {

    const folderPath = "./products"; 
    const filename = "products.json";
    const filePath = path.join(folderPath, filename);

    
    let fileContent = fs.readFileSync(filePath,"utf-8");
    console.log("fileContent : ", fileContent);

    res.status(200).send(fileContent);
});

app.listen(port, () => {
  console.log(`Server runnng at http://localhost:${port}`);
});

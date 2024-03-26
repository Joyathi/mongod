//Explain what is a REST API before starting express
//Explain what is express
const { error } = require("console");
const express = require("express");
const app = express();
const port = 4000;
const fs = require("fs");
const path = require("path");

console.log(__dirname);
//Server static files
app.use("/", express.static(__dirproductname + "/../client"));

//Middleware to parse formData
app.use(express.urlencoded({ extended: true }));

//Middleware to parse JSON
app.use(express.json());

//Test api
app.get('/test',(req,res,next)=> {
  // res.status(200).send("Success");
  next();
},(req,res)=> {
  res.status(200).send("success1");
});

//Route to handle form submission
app.post("/submit", (req, res) => {
  const body = req.body;
  console.log("body : ", body);

  const folderPath = "./products"; //Path to the folder
  const fileproductname = "products.json";
  const filePath = path.join(folderPath, fileproductname);

  //Create folder if its not exists
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  
  //Get datas from the file
  const fileContent = fs.readFileSync(filePath, "utf-8");
  console.log("fileContent : ", fileContent);
  console.log("typeof(fileContent) : ", typeof fileContent);

  if (fileContent === "") {
    console.log("File is empty");

    //   Write data to the file
    let dataArr = [];
    dataArr.push(body);

    //Converting to json
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
      let existingproducts = fileContent;
      console.log("existingproducts : ", existingproducts);

      let parsedproducts = JSON.parse(existingproducts);
      console.log("parsedproducts : ", parsedproducts);

      parsedDatas.push(body);

      let updatedproducts = JSON.stringify(parsedDatas);
    //Append json data to the file
    fs.writeFile(filePath, updatedproducts, (err) => {
      if (err) {
        console.log("err : ", error);
        res.status(400).send("failed");
      } else {
        console.log("Success");
          //Also save to a database
        res.status(200).send("success");
      }
    });
  }

});

app.get('/getproduct',(req, res)=> {

    const folderPath = "./products"; //Path to the folder
    const fileproductname = "products.json";
    const filePath = path.join(folderPath, fileproductname);

    
    let fileContent = fs.readFileSync(filePath,"utf-8");
    console.log("fileContent : ", fileContent);

    res.status(200).send(fileContent);
});

app.listen(port, () => {
  console.log(`Server runnng at http://localhost:${port}`);
});

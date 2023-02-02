const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
const port = 3000

app.get('/',function (req, res)  {
    res.sendFile(__dirname + "/index.html")
  })

app.post("/",function (req,res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1+num2
  res.send("The result of the calcuclatinois = "+result)
})
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



app.get('/bmiCalculator',function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html")
})
app.post('/bmiCalculator',function(req,res){
  var weight = Number(req.body.weight)
  var height = Number(req.body.height)
  var bmi = weight/(height*height)
  res.send("Your BMI is "+bmi)
})


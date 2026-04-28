const nodemailer = require("nodemailer");

require("dotenv").config();
expr = require("express")
app= expr()
app.set("view engine", "ejs")
let mailed;
let otp;
app.use(expr.urlencoded({extended:true}))
app.use(expr.static("./", {index:"demo.html"}))
app.post("/data", (req,res)=>{
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  });
  mailed= req.body.email 
  otp = Math.floor(100000 + Math.random() * 900000);
  const mailOptions = {
    from:"noreply@gmail.com",
    to: req.body.email, 
    subject: "Test Email",
    html: `<html><body style = " text-align:center;"><h1 style ="color: red; text-align:center;">Mailing done from nodemailer </h1><h2 style="color : darkblue; text-align:center">Hello ${req.body.name}</h2><h2 style = "color : darkblue; text-align:center">FULL STACK FSD </h2> <br><br><h1 style ="color: red; text-align:center;">Your OTP is ${otp} </h1><h1 style="justify-content:center"><button style="padding:15px; font-size:16px;">Mailing Done</button></h1></body></html>`,
    attachments : [{filename:"a.png", path : "a.png"}]
  };


  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.send("not sent")
    } else {
      res.redirect("/verify")
    }
  });
})
app.get("/verify", (req,res)=>{
  res.render("verify", {mail:mailed})
})
app.post("/done", (req,res)=>{
  if(req.body.otp1== otp){
    res.send(`<html><body><h1>User Verified</h1></body</html>`)
  }
  else{
    res.send(`<html><body><h1>User not Verified</h1></body</html>`)

  }
})
app.listen(5555)
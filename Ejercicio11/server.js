const express = require('express')

const cookieParser = require('cookie-parser')

const app = express ()

app.use(cookieParser("un secreto"))

app.get("/crearCookie",(req,res) => {
   return res.cookie("nombre","eduuuu",{signed:true, httpOnly:true})
   .send("<h1>guardamos tu cookie</h1>");
})

// LAS COOKIES FIRMADAS (SIGNED:TRUE) SE EMPIEZAN A UBICAR EN OTRO LADO (req.signedCookies)

app.get("/recuperarCookie",(req,res) => {
    let cookies = req.cookies;
    console.log("77777777777777777777777777")
    console.log(req.cookies)
    console.log(req.signedCookies)

    return res.send("<h1>tengo las cookiesssss</h1>");
 })
app.listen (8000, () =>{
    console.log('exampleeee')
})

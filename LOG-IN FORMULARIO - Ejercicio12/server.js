const express = require('express');
// const cookieParser = require('cookie-parser');
const session = require("express-session");
//  const FileStore = require('session-file-store')(session);

import MongoStore from "connect-mongo";
const app = express()

// app.use(cookieParser("un secreto"))
app.use(
    session({ 
    store: MongoStore.create({
        mongoUrl:
          "mongodb+srv://franchas123:fran123@cluster0.zqkvn9v.mongodb.net/?retryWrites=true&w=majority",
        mongoOptions: advancedOptions,
      }), 
    secret: "secreto", 
    resave: true, 
    saveUninitialized: true }
    ));

// app.use(
//     session({
//         store: new FileStore({ path: "./sesiones", 
//         ttl: 300, retries: 0 }),
//         secret: "el secreto",
//         resave: false,
//         saveUninitialized: false,
//     }));



app.get("/crearCookie", (req, res) => {
    return res.cookie("nombre", "eduuuu", { signed: true, httpOnly: true })
        .send("<h1>guardamos tu cookie</h1>");
})

// LAS COOKIES FIRMADAS (SIGNED:TRUE) SE EMPIEZAN A UBICAR EN OTRO LADO (req.signedCookies)

app.get("/recuperarCookie", (req, res) => {
    let cookies = req.cookies;
    console.log("77777777777777777777777777")
    console.log(req.cookies)
    console.log(req.signedCookies)

    return res.send("<h1>tengo las cookiesssss</h1>");
})
app.listen(8000, () => {
    console.log('exampleeee')
})


app.get("/login", (req, res) => {
    const { user, pas } = req.query;
    if (user !== "edu" || pas !== "vilela") {
        return res.send("login failed!")
    } else {
        req.session.user = user;
        req.session.admin = true;
        return res.send("login sucess!!!");
    }
});

app.get("/test", (req, res) => {
    console.log(req.session.user);
    console.log(req.session.admin);
    res.send("ruta test")
});
function checkAdmin(req, res, next) {
    if (!req.session.admin) return res.status(403).send("no sos admin");
    return next()
}

app.get("/datoImportante", checkAdmin, (req, res) => {
    if (req.session.admin) {
        return res.send("ultra secreto");
    } else {
        return res.send("che no estas logeado,no podes ver nada")
    }

});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.json({ status: 'logout error', body: err })
        }
        res.send('Logout ok!')
    })
})


const TelegramBot = require('node-telegram-bot-api');
const express = require("express");
const cors = require("cors")
const path = require("path")
const fs = require("fs")

//const mailer = require("./mail/nodemail")

const token = "5742837960:AAE2OhbtzMTgXUA8YEWpHW703WNi511Jacs";
const bot = new TelegramBot(token, {polling: true});
const weburl = "https://zesty-cassata-92288c.netlify.app/form"

const useRouter = require("./routes/user.routes")

const PORT = process.env.PORT || 5050
//const __dirname = path.resolve()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api",useRouter)
app.use(express.static(path.resolve(__dirname,"html")))

app.get("/mail",(req,res)=>{
    res.end(weburl)
})

// const message = {
//     to: "7312594@mail.ru",
//     subject:" ТЕМА ПИСЬМА",
//     text:"пиьмо отправленно"
// }

// mailer(message)


bot.on('message', async (msg) => {
    const chatID2 = "340492807"
    const chatId = msg.chat.id;
    const text = msg.text;
    const file_id ="BAACAgIAAxkBAAIB4GP98-E_c1x3YMlBhk4yoCzoFk1oAAIYJgACsAzxS0y_EAp1WcctLgQ"

    console.log(msg)

    if(text==="User"){
        await bot.sendMessage(chatId,msg.chat.first_name)
        console.log(msg)
        //await bot.sendMessage(chatID2,"hello")
        await bot.sendPhoto(chatId,"./html/programer.png")
        
    }
    if(text==="start"){
        await bot.sendMessage(chatId, "Ниже появится кнопка",{} )
        await bot.sendPhoto(chatId,"./html/programer.png")
    }   
   
    

    if(text === "/start"){
        await bot.sendMessage(chatId, `welcome ${msg.chat.first_name}`,{
            reply_markup:{
                keyboard:[
                    [{text:"start"}]
                ]
            }
        })
        

    }
    
    
        
    }

  );

  app.get("/post",(request,respone)=>{
    respone.send("Hello postgress")
  })

  app.get("/test",(request,respone)=>{
    respone.send("test")
  })

  

    





  app.listen(PORT,()=>console.log(`server been started in ${PORT}`))

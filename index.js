import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.js"
import betRoutes from "./routes/bet.js"
import bankrollRoutes from "./routes/bankroll.js"

const app = express();
const port = process.env.PORT || 8000


app.use(express.json())
app.use(cors())
app.use(cookieParser())



app.use("/auth", authRoutes)
app.use("/bet", betRoutes)
app.use("/bankroll", bankrollRoutes)


app.listen(port, () => {
    console.log(`API listening on PORT ${port} `)
  })
  
  app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })
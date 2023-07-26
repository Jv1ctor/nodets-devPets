import express, {Request, Response} from "express";
import path from "path";
import mustache from "mustache-express";
import routerMain from "./routes/index.routes";
const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, './views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

server.use(routerMain)

server.use( (req: Request, res: Response) => {
  res.status(404).send('erro ao encontrar pagina')
})


server.listen(80)
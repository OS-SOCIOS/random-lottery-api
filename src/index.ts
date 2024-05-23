import 'dotenv/config'
const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const app = express()
const port = process.env.PORT

const db = new sqlite3.Database(':memory:')

app.listen(port, () => {
  generateBet(18,1,25)
  console.log(`Server running on port: ${port}`)
  console.log('BICHEIROS ONLINE!')
})

//TODO: JOGO DO BICHO
//LOTOFACIL
function generateBet(slots: number, min: number, max: number) {
  let bet: number[] = []
  while (bet.length < slots) {
    const betNum = Math.floor(Math.random() * (max - min + 1)) + min
    if (!bet.includes(betNum)) {
      bet.push(betNum)
    }
  }
  console.log(bet)
  console.log(bet.length)
}




app.get('/', (req:any, res:any) => {
  res.send('Hello World')
})
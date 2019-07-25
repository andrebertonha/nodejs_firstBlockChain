const BlockChain = require('./BlockChain')

const CILCoin = new BlockChain()

CILCoin.addBlock({ sender: 'Bruce Wayne', reciver: 'Tony Stark', amount: 100 })
CILCoin.addBlock({ sender: 'Harrison Wells', reciver: 'Han Solo', amount: 200 })
CILCoin.addBlock({ sender: 'tony stark', reciver: 'Ned STARK', amount: 175 })

console.log(JSON.stringify(CILCoin, null, 4))

console.log(' # VALIDATE # ')
console.log('Validity: ', CILCoin.chainIsValid())
CILCoin.chain[0].data.reciver = 'Joker'
console.log('Validity', CILCoin.chainIsValid())
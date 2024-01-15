const { devnetConfig: config } = require('../config/index')
const { ethers } = require('ethers');
const { abi } = require('../artifacts/contracts/Haha.sol/Haha.json')
// console.log('config', devnetConfig)
// console.log('ethers', ethers)

const provider = new ethers.JsonRpcProvider(config.rpcUrls)
const privateKey = config.key
// const getSigner = async () => {
//     const signer = await provider.getSigner()
//     return signer
// }
// getSigner().then((signer) => {
//     console.log('provider', provider)
//     console.log('signer', signer)
// })
const wallet = new ethers.Wallet(privateKey, provider)
const myContract = new ethers.Contract(`0xc4668BEb934246d8E9F3983aea246Fd8e8398114`, abi, wallet);
console.log('myContract', myContract)

const main = async () => {
    // await myContract.update('I am running tonight!')
    let message = await myContract.message()
    console.log('message', message)
}

main()
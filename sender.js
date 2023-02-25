const Web3 = require('web3');

const privKey ='888'; 
const addressFrom = '0xFC9f49d40b9EC0936dC4Aa64A17cA7dB5D4044c9';

const WALLET_ADDRESSES = ['0xD9FF450d7DaBE4d7353d5c22292d471e15778043', '0xD9FF450d7DaBE4d7353d5c22292d471e15778043'];

const web3 = new Web3('https://evm-cronos.crypto.org');

// Create transaction
const deploy = async () => {

  for (const addressTo of WALLET_ADDRESSES) {
   console.log(
      `Attempting to make transaction from ${addressFrom} to ${addressTo}`
   );

   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: addressFrom,
         to: addressTo,
         value: web3.utils.toWei('1', 'ether'),
         gas: '21000',
      },
      privKey
   );

   // Deploy transaction
   const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );
   console.log(
      `Transaction successful with hash: ${createReceipt.transactionHash}`
   );
  }


};

deploy();
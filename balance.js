const Web3 = require('web3');

const addressFrom = '0xFC9f49d40b9EC0936dC4Aa64A17cA7dB5D4044c9';

const addressTo = '0xD9FF450d7DaBE4d7353d5c22292d471e15778043';

const web3 = new Web3('https://evm-cronos.crypto.org');

// Balance call
const balances = async () => {
   const balanceFrom = web3.utils.fromWei(
      await web3.eth.getBalance(addressFrom),
      'ether'
   );
   const balanceTo = await web3.utils.fromWei(
      await web3.eth.getBalance(addressTo),
      'ether'
   );

   console.log(`The balance of ${addressFrom} is: ${balanceFrom} CRO.`);
   console.log(`The balance of ${addressTo} is: ${balanceTo} CRO.`);
};

balances();
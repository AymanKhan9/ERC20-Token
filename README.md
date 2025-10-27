# Creating an ERC20 Token

A simple **ERC-20 token** deployed on the **Sepolia test network** using **Hardhat** and **Infura**.  
This project demonstrates the full workflow of creating, compiling, and deploying a token smart contract using the latest Solidity and Hardhat setup.

---

## Features

- Implements the ERC-20 token standard.
- Built using Solidity `^0.8.20`.
- Deployable to any Ethereum-compatible network.
- Uses Hardhat for development and Infura for RPC access.
- Compatible with MetaMask and other wallets.

---

## Tech Stack

- **Solidity** — Smart contract language  
- **Hardhat** — Development environment  
- **Infura** — RPC endpoint provider  
- **MetaMask** — Wallet for interacting with the blockchain  
- **Node.js** — Runtime for Hardhat and deployment scripts  

---

---

##  Prerequisites

Before you begin, make sure you have the following:

- [Node.js](https://nodejs.org/) installed  
- [MetaMask](https://metamask.io/) wallet  
- A [Sepolia](https://sepoliafaucet.com/) testnet account with some test ETH  
- An [Infura](https://infura.io/) account and project ID

---

##  Setup Instructions

###  Clone the Repository

```bash
git clone https://github.com/yourusername/MyToken.git
cd MyToken
```

### Install Dependencies
```bash
npm install
```

### Configure Environment Variables

Create a .env file in the root directory and add the following:
```bash
INFURA_API_KEY=your_infura_project_id
PRIVATE_KEY=your_metamask_private_key
```

### Compile the Smart Contract
```bash
npx hardhat compile
```

### Deploy to Sepolia Network
```bash
npx hardhat run scripts/deploy.js --network sepolia
```


After deployment, note down the contract address printed in the console.

Add Token to MetaMask

Open MetaMask and switch to the Sepolia Test Network

Click “Import Tokens” at the bottom of the Tokens tab

Paste your deployed contract address

MetaMask will automatically detect your token symbol and decimals

Click Import — your token should now appear!

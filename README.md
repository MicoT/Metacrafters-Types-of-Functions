# Metacrafters Types of Functions

This repository contains a token called Red Diamond that was used to learn the basics of ERC20 contracts.

## Description

The code was using and module called Openzeppelin to initialize the token and add the necessary functions such as the ability to burn and mint only as the owner.

## Getting Started

### Executing program

To run this code will require an IDE, Node js and a library called hardhat.

Once the repository has been cloned you need to peform these commands in your terminal:

Run the commands below to be able to launch the token on a local hardhat network.
```
npm install --save-dev hardhat

npx hardhat node

npx hardhat run scripts/deploy.js --network localhost
```

Once the contract is deployed, the terminal/console should notify you where the contract is deployed and you can use the address to access it.

You can use Remix IDE to connect to the token.

## Authors

John Mico Tongco
jmTongco@mcm.edu.ph

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

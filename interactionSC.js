//0x8c8a42f2459d97a1eb32f022ee1b14a8cdbc9c13

const {ethers}= require ("ethers");

const provider =new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/c3e988a91fe64ae1920c8a5e1876f325`)

const walletAddress = "0x8c8a42f2459d97a1eb32f022ee1b14a8cdbc9c13";

const walletAbi  = [
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractInteraction = async () =>{
    //read functions from Blockchain 
    const walletContract= new ethers.Contract (walletAddress,walletAbi,provider)

    // const contractName = await walletContract.name()
    // console.log("Contract Name :",contractName)

    const num = await walletContract.getValue()
    console.log("num :",String(num));

    const contractBalance = await walletContract.contractBalance()
    
    const balanceEther = ethers.utils.formatEther(contractBalance);
    console.log("Account Balance in Ether :",balanceEther);

    // const userBalance = await walletContract.accountBalance('0xe5DEd5C8B695c7C0892340bb694e1280935599f6')
    // const balanceEtherUser = ethers.utils.formatEther(userBalance);
    // console.log("User Account Balance in Ether :",balanceEtherUser);
 
}

contractInteraction();
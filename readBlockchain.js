const {ethers} =require ("ethers")

const provider =new ethers.providers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/-jfRs0YDMbVeGmIiDmIRppmbB-02ITe5`)


const queryBlockchain =async ()=>{
    // const block = await provider.getBlockNumber();
    // console.log("Current Block Number :",block )

    const balance =await provider.getBalance('0x6a25736b229b376ECDE3a5e45e8F45425410cB52')
    console.log("Account Balance :",balance);

    const balanceEther = ethers.utils.formatEther(balance);
    console.log("Account Balance in Ether :",balanceEther);

    const balanceWei = ethers.utils.parseEther(balanceEther);
    console.log("Account Balance in Wei :",balanceWei);

}

queryBlockchain()
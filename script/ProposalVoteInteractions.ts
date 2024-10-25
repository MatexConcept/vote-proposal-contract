import hre from "hardhat";

async function main (){
    const DEPLOYED_CONTRACT = "0x2Ad2373EA18EA73E921Eb7bB4123D241a9dBEC6a";
  
    const myAccount = "0xdCe75C20Ff70f00681aDa1768EceD71Dd7C065A1";


    const signer = await hre.ethers.getSigner(myAccount);
   

    const ProposalVoteContractInstance = await hre.ethers.getContractAt(
        "ProposalVote",
        DEPLOYED_CONTRACT
    );

     // starting scripting

     console.log("##################### Creating Proposals ###############");

     const proposalName1 = "Church Building";
    const propasalDescription1 = "you all should donate 20m each for church";
    const quorum1 = 2;

    const proposalName2 = "Credit my Aza";
    const propasalDescription2 = "you all should donate 100m each for guiding";
    const quorum2 = 2;


     const createProposal1 = await ProposalVoteContractInstance.connect(signer).createProposal(proposalName1, propasalDescription1, quorum1);

     createProposal1.wait();
     console.log({"Proposal 1": createProposal1});

     const createProposal2 = await ProposalVoteContractInstance.connect(signer).createProposal(proposalName2, propasalDescription2, quorum2);

     createProposal2.wait();
     console.log({"Proposal 2": createProposal2});


     console.log("##################### Voting on Proposal ###############");

     const voteOnProposal1 = await ProposalVoteContractInstance.connect(signer).voteOnProposal(0);

     voteOnProposal1.wait();
     console.log({"voted on propsal 1": voteOnProposal1});


     console.log("##################### getting All Proposal ###############");

     const getAllTheProposal = await ProposalVoteContractInstance.getAllProposals();

     console.table(getAllTheProposal);

     console.log("##################### getting A Proposal ###############");

     const getSingleProposal = await ProposalVoteContractInstance.getProposal(0);

     console.log("Getting a single proposal", {
        name:getSingleProposal.name_,
        description: getSingleProposal.desc_,
        count:getSingleProposal.count_.toString(),
        voters:getSingleProposal.voters_,
        qourum:getSingleProposal.quorum_,
        staus:getSingleProposal.status_
        
        })
    


}

     






main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
})

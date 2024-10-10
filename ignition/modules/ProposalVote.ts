// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const ProposalVote = buildModule("ProposalVoteModule", (m) => {

  const ProposalVote = m.contract("ProposalVote");

  return { ProposalVote };


});

export default ProposalVote;
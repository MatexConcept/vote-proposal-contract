// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ProposalVoteFactoryModule = buildModule("ProposalVoteFactoryModule", (m) => {

  const proposalVoteFactoryModule = m.contract("ProposalVoteFactory", );

  return { proposalVoteFactoryModule };
});

export default ProposalVoteFactoryModule;
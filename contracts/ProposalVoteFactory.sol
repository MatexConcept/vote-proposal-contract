// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./ProposalVote.sol";

contract ProposalVoteFactory {

   
    ProposalVote[] public deployedProposals;

    
    event ProposalVoteDeployed(address indexed proposalVoteAddress);

    function createProposalVote() external returns (address) {
        ProposalVote newProposalVote = new ProposalVote();
        deployedProposals.push(newProposalVote);
        
        emit ProposalVoteDeployed(address(newProposalVote));
        return address(newProposalVote);
    }


    function getAllDeployedProposalVotes() external view returns (ProposalVote[] memory) {
        return deployedProposals;
    }

  
    function createProposal(
        uint256 _index,
        string memory _name,
        string memory _description,
        uint16 _quorum
    ) external {
        require(_index < deployedProposals.length, "Invalid index");
        ProposalVote proposalVote = deployedProposals[_index];
        proposalVote.createProposal(_name, _description, _quorum);
    }

    function voteOnProposal(uint256 _index, uint8 _proposalIndex) external {
        require(_index < deployedProposals.length, "Invalid index");
        ProposalVote proposalVote = deployedProposals[_index];
        proposalVote.voteOnProposal(_proposalIndex);
    }

    function getProposalInfo(
        uint256 _index,
        uint8 _proposalIndex
    ) external view returns (
        string memory name_,
        string memory desc_,
        uint16 count_,
        address[] memory voters_,
        uint16 quorum_,
        ProposalVote.PropsStatus status_
    ) {
        require(_index < deployedProposals.length, "Invalid index");
        ProposalVote proposalVote = deployedProposals[_index];
        return proposalVote.getProposal(_proposalIndex);
    }

    function getAllProposals(uint256 _index) external view returns (ProposalVote.Proposal[] memory) {
        require(_index < deployedProposals.length, "Invalid index");
        ProposalVote proposalVote = deployedProposals[_index];
        return proposalVote.getAllProposals();
    }
}

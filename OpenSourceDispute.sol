// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "./IArbitrable.sol";
import "./IArbitrator.sol";
import "./IEvidence.sol";

contract DisputeResolution is IArbitrable, IEvidence {
    IArbitrator public arbitrator;
    uint public arbitrationFee;
    uint public timeOut;
    mapping(address => mapping(uint => Dispute)) public disputes;

    struct Dispute {
        uint createdAt;
        uint256 disputeID;
        address payable defendant;
        address payable plaintiff;
        IArbitrator arbitrator;
        uint256 ruling;
        bool appealed;
    }

    event DisputeCreated(uint indexed _disputeID, address indexed _defendant, address indexed _plaintiff);
    event Ruling(uint indexed _disputeID, uint256 indexed _ruling);

    constructor(IArbitrator _arbitrator, uint _arbitrationFee, uint _timeOut) {
        arbitrator = _arbitrator;
        arbitrationFee = _arbitrationFee;
        timeOut = _timeOut;
    }

    function createDispute(address payable _defendant, address payable _plaintiff) external payable returns (uint disputeID) {
        require(msg.value == arbitrationFee, "Incorrect arbitration fee");

        disputeID = arbitrator.createDispute{value: msg.value}(2, "");
        Dispute storage dispute = disputes[_defendant][disputeID];
        dispute.createdAt = block.timestamp;
        dispute.disputeID = disputeID;
        dispute.defendant = _defendant;
        dispute.plaintiff = _plaintiff;
        dispute.arbitrator = arbitrator;
        emit DisputeCreated(disputeID, _defendant, _plaintiff);
        return disputeID;
    }

    function appeal(uint256 _disputeID) external {
        Dispute storage dispute = disputes[msg.sender][_disputeID];
        // require(arbitrator.disputeStatus(_disputeID) == IArbitrator.DisputeStatus.Ruled, "Invalid dispute status");
        require(!dispute.appealed, "Appeal already submitted");

        dispute.appealed = true;
        arbitrator.appeal(_disputeID, "");
    }

    function rule(uint256 _disputeID, uint256 _ruling) public override {
        Dispute storage dispute = disputes[address(this)][_disputeID];
        require(msg.sender == address(arbitrator), "Not arbitrator");
        require(arbitrator.disputeStatus(_disputeID) == IArbitrator.DisputeStatus.Waiting, "Invalid dispute status");

        dispute.ruling = _ruling;
        emit Ruling(_disputeID, _ruling);

        // Resolve the dispute if the timeout period has passed.
        if (block.timestamp > dispute.createdAt + timeOut) {
            // arbitrator.executeRuling(_disputeID, "");
        }
    }

    function submitEvidence(uint256 _disputeID, address _evidenceSubmitter, string calldata _evidence) external {
        require(msg.sender == address(arbitrator), "Not arbitrator");
        // emit Evidence(arbitrator, _evidenceSubmitter, _disputeID, _evidence);
    }

    function getDispute(uint256 _disputeID, address _defendant) external view returns (Dispute memory dispute) {
        return disputes[_defendant][_disputeID];
    }
}
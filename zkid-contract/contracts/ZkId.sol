// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract ZkId is Ownable {
    constructor() Ownable(msg.sender) {}

    struct Identity {
        bytes32 UID;
        bytes32 nameHash; // keccak256 hash of name
        uint256 dobHash; // Poseidon hash of date of birth
    }

    struct Claim {
        string entity;
        uint256 dataHash;
        uint256 timestamp;
    }

    mapping(address => Identity) private identities;
    mapping(address => mapping(address => Claim)) identityClaims;
    mapping(address => address[]) private claims;

    bytes32 private zeroHash = bytes32(0);

    event Mint(address _soul);
    event Burn(address _soul);
    event Update(address _soul);
    event SetClaim(address _claimer, address _soul);
    event RemoveClaim(address _claimer, address _soul);

    function mint(
        address _soul,
        Identity memory _identityData
    ) external onlyOwner {
        require(identities[_soul].UID == zeroHash, "Soul already exists");
        identities[_soul] = _identityData;
        emit Mint(_soul);
    }

    function burn(address _soul) external onlyOwner {
        delete identities[_soul];
        for (uint i = 0; i < claims[_soul].length; i++) {
            address claimer = claims[_soul][i];
            delete identityClaims[claimer][_soul];
        }
        emit Burn(_soul);
    }

    function update(address _soul, Identity memory _identityData) external {
        require(identities[_soul].UID != zeroHash, "Soul does not exist");
        identities[_soul] = _identityData;
        emit Update(_soul);
    }

    function hasSoul(address _soul) external view returns (bool) {
        if (identities[_soul].UID == zeroHash) {
            return false;
        } else {
            return true;
        }
    }

    function getSoul(address _soul) external view returns (Identity memory) {
        return identities[_soul];
    }

    // Claim functions
    function setClaim(address _soul, Claim memory _claimData) external {
        require(
            identities[_soul].UID != zeroHash,
            "Cannot create a claim for a soul that has not been minted"
        );
        identityClaims[msg.sender][_soul] = _claimData;
        claims[_soul].push(msg.sender);
        emit SetClaim(msg.sender, _soul);
    }

    function getClaim(
        address _claimer,
        address _soul
    ) external view returns (Claim memory) {
        return identityClaims[_claimer][_soul];
    }

    function listClaims(
        address _soul
    ) external view returns (address[] memory) {
        return claims[_soul];
    }

    function hasClaim(
        address _claimer,
        address _soul
    ) public view returns (bool) {
        if (
            keccak256(bytes(identityClaims[_claimer][_soul].entity)) == zeroHash
        ) {
            return false;
        } else {
            return true;
        }
    }

    function removeClaim(address _claimer, address _soul) external {
        require(
            msg.sender == _soul,
            "Only users have rights to delete their claim data"
        );
        require(hasClaim(_claimer, _soul), "Claim does not exist");
        delete identityClaims[_claimer][msg.sender];
        emit RemoveClaim(_claimer, _soul);
    }

    // Getters
    function getID(address _soul) external view returns (Identity memory) {
        return identities[_soul];
    }
}

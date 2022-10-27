pragma solidity >=0.4.21 <0.6.0;


//  define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./ERC721Mintable.sol";
import "./verifier.sol";

//  define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token {

    Verifier verifierContract;

    //  define a solutions struct that can hold an index & an address
    struct Solution {
        bool added;
        bytes32 index;
        address theAddress;
        uint256 tokenId;
    }

    //  define an array of the above struct
    mapping(uint256 => Solution) solutions;

    //  define a mapping to store unique solutions submitted
    mapping(bytes32 => bool) private solutionsSubmitted;

    constructor(address verifierAddress) CustomERC721Token() public {
      verifierContract = Verifier(verifierAddress);
    }

    //  Create an event to emit when a solution is added
    event SolutionAdded(bytes32 key, address theAddress, uint256 tokenId);

    //  Create a function to add the solutions to the array and emit the event
    function addSolution(address theAddress, uint256 tokenId, uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory inputs) public {
      bytes32 key = keccak256(abi.encodePacked(a, b, c, inputs));
      require(!solutionsSubmitted[key], "This solution already exists");

      Solution memory newSolution = Solution({added : true, index : key, theAddress : theAddress, tokenId : tokenId});
        solutions[tokenId] = newSolution;
        solutionsSubmitted[key] = true;
        emit SolutionAdded(key, theAddress, tokenId);
    }


    //  Create a function to mint new NFT only after the solution has been verified
    function mintToken(address to, uint256 tokenId) public returns (bool) {
      //  - make sure the solution is unique (has not been used before)
      //  - make sure you handle metadata as well as tokenSuplly
      require(solutions[tokenId].added, "This solution already exists.");
      return super.mint(to, tokenId);
    }
}

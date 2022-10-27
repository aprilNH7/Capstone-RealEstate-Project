var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var Verifier = artifacts.require('Verifier');

contract('SolnSquareVerifier', accounts => {

    const account1 = accounts[0];
    const account2 = accounts[1];
    const proof = require('./proof.json');

    beforeEach(async function () {
        this.verifier = await Verifier.new({from: account1});
        this.contract = await SolnSquareVerifier.new(this.verifier.address, {from: account1});
    })

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('Test if a new solution can be added for contract - SolnSquareVerifier', async function () {
        const {proof: {a, b, c}, inputs: inputs} = proof;

        // Declare and Initialize a variable for event
        let emitted = false;

        // Watch the emitted event SolutionAdded()
        this.contract.contract.once('SolutionAdded', {}, function () {
            emitted = true;
        });

        await this.contract.addSolution(account2, 1, a, b, c, inputs);

        assert.equal(emitted, true, 'No events were emitted');
    });

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('Test if an ERC721 token can be minted for contract - SolnSquareVerifier', async function () {
        const {proof: {a, b, c}, inputs: inputs} = proof;

        await this.contract.addSolution(account2, 1, a, b, c, inputs);

        let previousToken = await this.contract.totalSupply.call();

        await this.contract.mint(account2, 1, {from: account1});

        let latestToken = await this.contract.totalSupply.call();

        let end = latestToken.toNumber() - previousToken.toNumber();

        assert.equal(end, 1, "Not the correct supply left");

        let failed = false;
        try {
            await this.contract.addSolution(account2, 1, a, b, c, inputs);
        } catch (e) {
            failed = true;
        }

        assert.equal(failed, true, "This solution was reused.");
    })
})

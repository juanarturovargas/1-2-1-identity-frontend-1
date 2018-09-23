var web3 = new Web3(new Web3.providers.HttpProvider("http://ec2-18-232-151-15.compute-1.amazonaws.com:8545"));
//var abi = JSON.parse('[{"anonymous": false,"inputs": [{"indexed": false,"name": "_address","type": "address"}],"name": "Changed","type": "event"},{"constant": false,"inputs": [{"name": "_name","type": "string"},{"name": "_lastname","type": "string"},{"name": "_birth_place","type": "string"},{"name": "_birth_year","type": "uint8"},{"name": "_birth_month","type": "uint8"},{"name": "_birth_day","type": "uint8"},{"name": "_nationality","type": "string"},{"name": "_photo_identity_hash","type": "string"},{"name": "_detail_identity_hash","type": "string"},{"name": "_skills","type": "string"},{"name": "_weight","type": "string"},{"name": "_height","type": "string"},{"name": "_ethnic_group","type": "string"},{"name": "_tutor","type": "address"}],"name": "createIdentity","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"       },{"constant": false,"inputs": [],"name": "getIdentity","outputs": [{"name": "","type": "string"},{"name": "","type": "string"}],"payable": false,"stateMutability": "nonpayable","type": "function" },      {"inputs": [],"payable": false,"stateMutability": "nonpayable","type": "constructor"}]')

var abi = JSON.parse(`[
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_lastname",
          "type": "string"
        },
        {
          "name": "_birth_place",
          "type": "string"
        },
        {
          "name": "_birth_year",
          "type": "uint8"
        },
        {
          "name": "_birth_month",
          "type": "uint8"
        },
        {
          "name": "_birth_day",
          "type": "uint8"
        },
        {
          "name": "_nationality",
          "type": "string"
        },
        {
          "name": "_photo_identity_hash",
          "type": "string"
        },
        {
          "name": "_detail_identity_hash",
          "type": "string"
        },
        {
          "name": "_skill_list",
          "type": "string"
        },
        {
          "name": "_weight",
          "type": "string"
        },
        {
          "name": "_height",
          "type": "string"
        },
        {
          "name": "_ethnic_group",
          "type": "string"
        },
        {
          "name": "_tutor",
          "type": "address"
        }
      ],
      "name": "createIdentity",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getIdentity",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]`);

var IdentityContract = web3.eth.contract(abi);
var contractInstance = IdentityContract.at('0xedb8cafcc9aff7c7f4a6b0588afdb3de71444e84');
web3.eth.defaultAccount = web3.eth.accounts[0];


function voteForCandidate() {
  //contractInstance.createIdentity.sendTransaction("xxxx","xxxx","xxxx",5555,5555,5555,"xxxx","xxxx","xxxx","xxxx","xxxx","xxxx","xxxx","0xeaed67d62fb3b756beba277d5636fa0468ceea68",{from: web3.eth.accounts[0]},(error, result) => { alert(result) } );
  contractInstance.createIdentity("xxxx","xxxx","xxxx",5555,5555,5555,"xxxx","xxxx","xxxx","xxxx","xxxx","xxxx","xxxx","0xeaed67d62fb3b756beba277d5636fa0468ceea68",{from: web3.eth.accounts[0]},(error, result) => { alert(result) } );

contractInstance.getIdentity({from: web3.eth.accounts[0]},function(error, result){
  if(!error){
    console.log(result);
    }else{
      console.log("error al llamar getIdentity" + error );
    }
 });

}

var balance = web3.eth.getBalance(web3.eth.accounts[0]);
console.log(balance);



 /*
function voteForCandidate(candidate) {
  //var candidateName = $("#candidate").val();
 try {
  contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, function() {
   //let div_id = candidates[candidateName];
   $("#"+div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
  });
 } catch (err) {
 }
}
*/

/*
$(document).ready(function() {
 var candidateNames = Object.keys(candidates);
 for (var i = 0; i < candidateNames.length; i++) {
  let name = candidateNames[i];
  let val = contractInstance.totalVotesFor.call(name).toString()
  $("#"+candidates[name]).html(val);
 }
});
*/

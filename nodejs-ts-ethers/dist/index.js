"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const ethers_1 = require("ethers");
const abi_json_1 = __importDefault(require("./abi.json"));
//const abiJson  = require("./abi.json");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get('/gettBlockNum', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //testWeb3();
    let result = yield gettBlockNum();
    console.log("/gettBlockNum --> " + result);
    res.send({ "gettBlockNum": result });
}));
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    //let res: Web3Info = await testWeb3();
    //console.log(res);
}));
function gettBlockNum() {
    return __awaiter(this, void 0, void 0, function* () {
        let provider = new ethers_1.ethers.JsonRpcProvider(process.env.URL); //Ethers v6
        console.log(provider);
        //let provider = new ethers.providers.JsonRpcProvider(process.env.URL); //Ethers v5
        // If no %%url%% is provided, it connects to the default
        let blockNum = yield provider.getBlockNumber(); //TEST PROVIDER
        console.log(" ---- Block Number " + blockNum);
        //signer = new ethers.Wallet(<BytesLike>process.env.PRIVATE_KEY, provider);//Ethers v6
        let signer = new ethers_1.ethers.Wallet(process.env.PRIVATE_KEY, provider); //Ethers v5
        let contract = new ethers_1.ethers.Contract(process.env.CONTRACT_ADDRESS, abi_json_1.default, provider);
        //let scWithSigner = contract.connect(signer);
        //let response: Web3Info = { provider: provider, signer: signer, contract: contract};
        let response = { provider: provider, signer: signer };
        return blockNum;
    });
}

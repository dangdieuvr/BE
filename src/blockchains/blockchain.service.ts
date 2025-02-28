import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class BlockchainService {
  private etherscanApiKey = '9KVXIDXMGS34ASI3QX7RHUP626WBCKCFUN';


  async getEthBalance(address: string) {
    const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${this.etherscanApiKey}`;
    const response = await axios.get(url);
    return { balance: response.data.result };
  }

  async getTokenBalances(address: string) {
    const url = `https://api.etherscan.io/api?module=account&action=tokentx&address=${address}&apikey=${this.etherscanApiKey}`;
    const response = await axios.get(url);
    return response.data.result;
  }

    async getNFTs(address: string) {
      const url = `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${this.etherscanApiKey}`;
      const response = await axios.get(url);
      console.log(response.data.result); // Xem dữ liệu trả về
      return response.data.result;
    }
}

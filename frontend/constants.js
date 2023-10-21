// Impor file JSON yang dihasilkan oleh kompiler seperti Truffle atau Hardhat
import CryptoDevsNFT from '../artifacts/contracts/CryptoDevsNFT.sol/CryptoDevsNFT.json';
import FakeNFTMarketplace from '../artifacts/contracts/FakeNFTMarketplace.sol/FakeNFTMarketplace.json';
import CryptoDevsDAO from '../artifacts/contracts/CryptoDevsDAO.sol/CryptoDevsDAO.json';

// Alamat kontrak Anda
export const CryptoDevsNFTAddress = "0xcd6b38FBD57317409C2eA0Fd46872272fFd8fCee";
export const FakeNFTMarketplaceAddress = "0x31DE54913eB6ee118F7b794956234935A681c157";
export const CryptoDevsDAOAddress = "0xE241B0738BE7462Ee58Ab9c0959C9DB6A88953d4";

// ABI kontrak Anda
export const CryptoDevsNFTABI = CryptoDevsNFT.abi;
export const FakeNFTMarketplaceABI = FakeNFTMarketplace.abi;
export const CryptoDevsDAOABI = CryptoDevsDAO.abi;

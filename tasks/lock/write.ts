import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { getContractAddress } from "../../helpers/contractJsonHelper";
import { formatEther } from "viem";
import { alephZeroTestnet } from "../../helpers/constants";

/**
 * 【Task】	call write method of sample contract
 */
task(
	"callWriteMethod",
	"call write method (withdraw) of sample contract"
).setAction(async (taskArgs: any, hre: HardhatRuntimeEnvironment) => {
	console.log(
		"################################### [START] ###################################"
	);

	// get wallet client
	const [owner] = await hre.viem.getWalletClients({
		chain: alephZeroTestnet
	});
	const publicClient = await hre.viem.getPublicClient({
		chain: alephZeroTestnet
	});
	// get chain ID
	const chainId = (await publicClient.getChainId()).toString();
	// get contract name
	const contractName = `LockModule#Lock`;
	// get contract address
	const contractAddress = getContractAddress(chainId, contractName);

	console.log(`
            ${contractName} 's address is ${contractAddress}
        `);

	// create Contract instance
	const lock = await hre.viem.getContractAt(
		"Lock",
		contractAddress as `0x${string}`,
		{
			client: { 
				public: publicClient,
				wallet: owner 
			},
		}
	);

	// get contract's balance
	const beforeBalance = await publicClient.getBalance({
		address: contractAddress as `0x${string}`,
	});

	// call withdraw method
	const hash = await lock.write.withdraw();

	// get contract's balance
	const afterBalance = await publicClient.getBalance({
		address: contractAddress as `0x${string}`,
	});

	console.log(`
            beforeBalance: ${formatEther(beforeBalance)} ETH
            afterBalance: ${formatEther(afterBalance)} ETH
            tx Hash: ${hash}
        `);

	console.log(
		"################################### [END] ###################################"
	);
});

import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { formatEther } from "viem";
import { alephZeroTestnet } from "../../helpers/constants";

/**
 * 【Task】get the balance of the account
 */
task("getBalance", "getBalance").setAction(
	async (taskArgs: any, hre: HardhatRuntimeEnvironment) => {
		console.log(
			"################################### [START] ###################################"
		);
		
		const [bobWalletClient] = await hre.viem.getWalletClients({
			chain: alephZeroTestnet
		});
		const publicClient = await hre.viem.getPublicClient({
			chain: alephZeroTestnet
		});
		

		const bobBalance = await publicClient.getBalance({
			address: bobWalletClient.account.address,
		});

		console.log(
			`Balance of ${bobWalletClient.account.address}: ${formatEther(
				bobBalance
			)} ETH`
		);

		console.log(
			"################################### [END] ###################################"
		);
	}
);

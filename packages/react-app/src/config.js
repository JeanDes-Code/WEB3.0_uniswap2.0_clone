import { Goerli } from '@usedapp/core'

export const ROUTER_ADDRESS = '0x9Cb19D207fB9B9B2AF5A06eD548CD976cFC2319e'

export const DAPP_CONFIG = {
    readOnlyChainId: Goerli.chainId,
    readOnlyUrls: {
        [Goerli.chainId]:
            'https://eth-goerli.g.alchemy.com/v2/ClBY_S30pB9qhcHp_bRtWywZdFPRtS4N',
    },
}

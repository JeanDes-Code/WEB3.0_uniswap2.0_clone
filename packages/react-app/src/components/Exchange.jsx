import React, { useState } from 'react'
import { Contract } from '@ethersproject/contracts'
import { abis } from '@my-app/contracts'
import {
    ERC20,
    useContractFunctio,
    useEthers,
    useTokenAllowance,
    useTokenBalence,
} from '@usedapp/core'
import { ethers } from 'ethers'
import { parseUnits } from 'ethers/lib/utils'

import { ROUTER_ADDRESS } from './../config'
import styles from '../styles'

const Exchange = ({ pools }) => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="mb-8">
                <AmountIn />

                <Balance />
            </div>
            <div className="mb-8 w-[100%]">
                <AmountOut />

                <Balance />
            </div>
        </div>
    )
}

export default Exchange
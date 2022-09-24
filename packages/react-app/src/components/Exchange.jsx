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

import {
    getAvailableTokens,
    getCounterpartTokens,
    findPoolByTokens,
    isOperationPending,
    getFailureMessage,
    getSuccessMessage,
} from './../utils'
import { ROUTER_ADDRESS } from './../config'
import { AmountIn, AmountOut, Balance } from './'
import styles from '../styles'

const Exchange = ({ pools }) => {
    const isApproving = isOperationPending('approve') //TODO
    const isSwapping = isOperationPending('swap') //TODO

    // const successMessage = getSuccessMessage() //TODO
    // const failureMessage = getFailureMessage() //TODO

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
            {'approveNeeded' && !isSwapping ? (
                <button
                    disable={!'canApprove'}
                    onClick={() => {}}
                    className={
                        'canApprove'
                            ? 'bg-site-pink text-white'
                            : 'bg-site-dim2 text-site-dim2'`
                            ${styles.actionButton}`
                    }
                >
                    {isApproving ? 'Validation ...' : 'Validé'}
                </button>
            ) : (
                <button
                    disable={!'canSwap'}
                    onClick={() => {}}
                    className={
                        'canSwap'
                            ? 'bg-site-pink text-white'
                            : 'bg-site-dim2 text-site-dim2'`
                    ${styles.actionButton}`
                    }
                >
                    {isSwapping
                        ? 'Échange...'
                        : 'hasEnoughBalance'
                        ? 'Échanger'
                        : 'Solde insuffisant'}
                </button>
            )}

            {'failureMessage' && !'resetState' ? (
                <p className={styles.message}>{'failureMEssage'}</p>
            ) : 'successMessage' ? (
                <p className={styles.message}>{'successMessage'}</p>
            ) : (
                ''
            )}
        </div>
    )
}

export default Exchange

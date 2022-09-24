import React from 'react'
import { useEthers } from '@usedapp/core'

import { usePools } from './hooks'
import styles from './styles'
import { uniswapLogo } from './assets'
import { WalletButton, Loader, Exchange } from './components'

const App = () => {
    const { account } = useEthers()
    const [loading, pools] = usePools()

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <header className={styles.header}>
                    <img
                        src={uniswapLogo}
                        alt="uniswap logo"
                        className="w-16 h-16 object-contain"
                    />
                    <WalletButton />
                </header>

                <div className={styles.exchangeContainer}>
                    <h1 className={styles.headTitle}>Uniswap 2.0</h1>
                    <p className={styles.subTitle}>
                        Échangez des cryptos en quelques instants{' '}
                    </p>

                    <div className={styles.exchangeBoxWrapper}>
                        <div className={styles.exchangeBox}>
                            <div className="pink_gradient" />
                            <div className={styles.exchange}>
                                {account ? (
                                    loading ? (
                                        <Loader
                                            title="Chargement des pools,
                                         veuillez patienter..."
                                        />
                                    ) : (
                                        <Exchange pools={pools} />
                                    )
                                ) : (
                                    <Loader title="Merci de connecter votre Portefeuille" />
                                )}
                            </div>
                            <div className="blue_gradient" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App

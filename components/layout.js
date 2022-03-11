import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'takumi'
export const siteTitle = "takumi's website"

const Layout = (props) => {
    const { children, home, contact } = props
    return (
    <div className={styles.container}>
        <Head>
            <link rel='icon' href='/favicon.ico' />
            <meta
                name='description'
                content='takumi website'
            />
            <meta name="og:title" content={siteTitle} />
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt={name}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                    <Link href="/">
                        <a>
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt={name}
                            />
                        </a>
                    </Link>
                    <h2 className={utilStyles.borderCircle}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                    </h2>
                </>
            )}
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href="/">
                    <a className={styles.backLink}>Back to home</a>
                </Link>
            </div>
        )}
        {!contact && (
            <div className={styles.backToHome}>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </div>
        )}
    </div>
    )
}

export default Layout
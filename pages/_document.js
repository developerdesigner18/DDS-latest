import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="zxx">
                <Head>
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Monda:wght@400;700&display=swap" 
                        rel="stylesheet" 
                    />
                    <link 
                        rel="icon" 
                        type="image/png" 
                        href="/images/favicon.png"
                    ></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
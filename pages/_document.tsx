import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Hi. I'm Omer. I'm a front end developer based in Bursa, Turkey."
          />
          <link rel="icon" href="/favicon.ico" />

          <meta property="og:url" content="https://omersahin.me" />
          <meta
            property="og:title"
            content="Omer Sahin | Front End Developer"
          />
          <meta
            property="og:description"
            content="Hi. I'm Omer. I'm a front end developer based in Bursa, Turkey."
          />

          <meta name="twitter:url" content="https://omersahin.dev" />
          <meta
            name="twitter:title"
            content="Omer Sahin | Front End Developer"
          />
          <meta
            name="twitter:description"
            content="Hi. I'm Omer. I'm a front end developer based in Bursa, Turkey"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

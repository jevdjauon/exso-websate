import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Poppins:400,500,600,700&display=swap"
            rel="stylesheet"
          />
          {/* {this.props.styleTags} */}
          {/* <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta
            name="msapplication-config"
            content="/static/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

import Document, { Html, Main, NextScript, DocumentContext, Head } from 'next/document';
import { extractCritical } from '@emotion/server';
import { GlobalStyles } from 'twin.macro';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return {
      ...initialProps,
      ...page,
      styles: (
        <>
          {initialProps.styles}
          <style data-emotion-css={styles.ids.join(' ')} dangerouslySetInnerHTML={{ __html: styles.css }} />
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="ko-kr">
        <GlobalStyles />
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="preload"
            href="/assets/fonts/SpoqaHanSansNeo-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/SpoqaHanSansNeo-Light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/SpoqaHanSansNeo-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/SpoqaHanSansNeo-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/SpoqaHanSansNeo-Thin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="preload" href="/styles/font.css" as="style" />
          <link rel="stylesheet" type="text/css" href="/styles/font.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <div id="portal__" />
      </Html>
    );
  }
}

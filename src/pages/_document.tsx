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
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

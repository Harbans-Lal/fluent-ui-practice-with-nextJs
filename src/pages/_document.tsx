import { Html, Head, Main, NextScript } from "next/document";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <FluentProvider theme={webLightTheme}>
          <Main />
          <NextScript />
        </FluentProvider>
      </body>
    </Html>
  );
}

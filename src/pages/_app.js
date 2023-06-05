import "@/styles/globals.css";

import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "@/prismicio";

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
}

export default App;

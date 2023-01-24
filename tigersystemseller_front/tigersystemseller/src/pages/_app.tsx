import type { AppProps } from "next/app";
import "bulma/css/bulma.css";
import "components/common/loader/loader.css";
import "primereact/resources/themes/md-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
// import "primeicons/primeicons.css"; //icons

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

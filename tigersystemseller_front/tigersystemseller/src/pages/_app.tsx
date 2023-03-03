import type { AppProps } from "next/app";
import "bulma/css/bulma.css";
import "components/common/loader/loader.css";
import "primereact/resources/themes/md-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeflex/primeflex.css";
import { Provider } from "next-auth/client";

// import "primeicons/primeicons.css"; //icons

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />;
    </Provider>
  );
}

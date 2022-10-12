import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  //getLayout?: (page: JSX.element) => JSX.element (Tambien se puede utilizar de esta forma para no importar de react)
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

//Aca se renderiza toda la APP
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  //Si el componente posee un Layout se ejectura su función, si no lo posee se ignora.
  const getLayout = Component.getLayout || ((page) => page);

  // return <Component {...pageProps} />;

  //Retornamos la funcion con el componente como argumento.
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;

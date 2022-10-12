import Link from "next/link";

import { MainLayout } from "../../components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/pricing/index.js</code>
      </p>
    </>
  );
}

//Esta funcion debe ser ejecutada, en este caso se va a ejecutar en _App.js
AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};

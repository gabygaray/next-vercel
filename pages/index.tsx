import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

//Los archivos de los componentes deben estar nombrados en minusculas y puede utilizar _ o - en su nombre

//El nombre que se le coloque al archivo será el nombre que tendrá el path en la página, ya se establece por defecto la navegacion de la ruta.
export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1 className={"title"}>
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">About</Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}

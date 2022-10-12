import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

//Colocando un archivo index dentro de una carpeta, este tomara la ruta con el nombre de la carpeta, es decir ..../contact (y NO ..../contact/index)
export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/contact.js</code>
      </p>
    </MainLayout>
  );
}

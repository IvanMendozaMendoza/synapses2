import Link from "next/link";

const NotFound = () => (
  <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
    <div className="flex flex-col items-center gap-6">
      <span className="text-7xl font-bold text-muted-foreground select-none">404</span>
      <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
        Página no encontrada
      </h1>
      <p className="text-muted-foreground text-center max-w-md mb-6">
        Lo sentimos, la página que buscas no existe o fue movida.<br />
        Por favor, verifica la URL o regresa al inicio.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-glow hover:bg-primary/90 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  </main>
);

export default NotFound;

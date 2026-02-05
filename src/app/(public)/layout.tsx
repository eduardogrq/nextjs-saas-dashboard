export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <nav>
          <span>Next.js SaaS</span>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <small>© 2026</small>
      </footer>
    </>
  );
}

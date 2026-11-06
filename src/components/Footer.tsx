export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-sm text-muted-foreground">
          <span className="text-accent">AP</span> — Built with Next.js &amp; Tailwind
        </p>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ankit Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

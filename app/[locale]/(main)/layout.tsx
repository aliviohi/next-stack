import { Footer, Header } from '../_layout';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative mx-auto h-full w-full max-w-5xl px-4 font-sans text-gray-800 lg:px-0">
        <Header />
        <main className="flex">{children}</main>
      </div>
      <Footer />
    </>
  );
}

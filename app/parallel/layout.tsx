import Link from "next/link";

export default function RootLayout({
  children, team, visitors
}: Readonly<{
  children: React.ReactNode;
  team: React.ReactNode;
  visitors: React.ReactNode
}>) {
  return (
    <div className="p-10">
      <div className="p-6 text-center space-x-8 text-blue-500">
        <Link href="/parallel">Home</Link>
        <Link href="/parallel/visitors">Visitor</Link>
      </div>
      <div className="flex gap-6">
        {team}
        {visitors}
      </div>
      {children}
    </div>
  );
}
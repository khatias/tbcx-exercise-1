import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Intent Result",
};

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 flex-grow">
{children}</div>;
}

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-[min(1040px,calc(100%-40px))]">{children}</div>;
}

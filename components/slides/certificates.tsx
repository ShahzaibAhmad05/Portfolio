// components/slides/certificates.tsx
"use client";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  href?: string;
};

const CERTS: Cert[] = [
  {
    title: "Meta Front-End Developer",
    issuer: "Coursera / Meta",
    date: "2024",
    credentialId: "ABC-123",
    href: "#",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "XYZ-789",
  },
  {
    title: "Google UX Design (Optional)",
    issuer: "Google",
    date: "2022",
  },
];

export default function CertificatesSlide() {
  return (
    <section className="relative h-full w-full flex-none snap-start">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center px-6 sm:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Certificates
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Credentials and completed programs. (Replace with your real items.)
          </p>

          <div className="mt-8 space-y-3">
            {CERTS.map((c) => (
              <article
                key={`${c.issuer}-${c.title}`}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {c.issuer} · {c.date}
                    </p>
                    {c.credentialId ? (
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                        Credential ID: {c.credentialId}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-3 sm:mt-0">
                    {c.href ? (
                      <a
                        href={c.href}
                        className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 px-4 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
                        onClick={(e) => c.href === "#" && e.preventDefault()}
                      >
                        View →
                      </a>
                    ) : (
                      <span className="text-sm text-zinc-500 dark:text-zinc-500">
                        Link not added
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
            Tip: If you have PDF certificates, you can link to them in{" "}
            <span className="font-medium">public/</span> or to a verification
            URL (Coursera, Credly, etc.).
          </p>
        </div>
      </div>
    </section>
  );
}

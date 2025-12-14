import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { profile } from "../data/profileData";

export default function Certifications() {
  return (
    <Container>
      <div className="py-5 pb-12">
        <div className="mb-3 flex items-baseline justify-between gap-4">
          <h2 className="text-[18px] font-bold">Certifications</h2>
        </div>

        <div className="grid gap-4">
          {profile.certifications.map((c) => (
            <Card key={`${c.title}-${c.issuer}`} className="p-4">
              <div className="font-bold">{c.title}</div>
              <div className="mt-1 text-sm text-slate-600">
                {c.issuer} • Issued {c.issued}
                {c.credentialId ? ` • Credential ID ${c.credentialId}` : ""}
              </div>

              <div className="mt-4">
                {c.credentialUrl ? (
                  <a
                    className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Show credential
                  </a>
                ) : (
                  <span className="text-sm text-slate-600">Optional: add credentialUrl in profileData.ts</span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}

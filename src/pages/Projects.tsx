import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { profile } from "../data/profileData";

export default function Projects() {
  return (
    <Container>
      <div className="py-5 pb-12">
        <div className="mb-3 flex items-baseline justify-between gap-4">
          <h2 className="text-[18px] font-bold">Projects</h2>
          <p className="text-sm text-slate-600">{profile.projects.length} items</p>
        </div>

        <div className="grid gap-4">
          {profile.projects.map((p) => (
            <Card key={p.name} className="p-4">
              <div className="font-bold">{p.name}</div>
              <div className="mt-1 text-sm text-slate-600">{p.timeframe}</div>

              <p className="mt-3 text-slate-600 leading-relaxed">{p.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.githubUrl ? (
                  <a
                    className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="text-sm text-slate-600">
                    {p.githubLabel ?? "Add GitHub link in profileData.ts"}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}

import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { profile } from "../data/profileData";

export default function Home() {
  return (
    <Container>
      <div className="py-10">
        {/* Hero */}
        <br /><br />
        <section className="max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight">{profile.name}</h1>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            {profile.headline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rounded-xl border border-slate-900/10 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50"
              href="/projects"
            >
              Projects
            </a>
            <a
              className="rounded-xl border border-slate-900/10 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50"
              href="/experience"
            >
              Experience
            </a>
          </div>

          <br />
          {profile.location ? (
            <div className="mt-4 text-xs text-slate-500">Busy Building Projects</div>
          ) : null}
        </section>

        <br />
        <br />
        <hr />

        {/* About */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-xl font-bold">About Me</h2>
          <p className="mt-2 text-slate-600 leading-relaxed">{profile.about}</p>
        </section>

        {/* Skills */}
        <section className="mt-10">
          <h2 className="text-lg font-bold">My Skills</h2>

          <div className="mt-4 space-y-4">
            <div>
              <div className="mb-2 text-sm font-semibold">Languages</div>
              <div className="flex flex-wrap gap-2">
                {profile.skills.languages.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 text-sm font-semibold">Frameworks</div>
              <div className="flex flex-wrap gap-2">
                {profile.skills.frameworks.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 text-sm font-semibold">Tools</div>
              <div className="flex flex-wrap gap-2">
                {profile.skills.tools.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <br />
        <br />
        <hr />

        {/* Featured Projects */}
        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg font-bold">Featured Projects</h2>
            <a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="/projects">
              View all →
            </a>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {profile.projects.slice(0, 4).map((p) => (
              <Card key={p.name} className="p-5">
                <div className="text-base font-semibold">{p.name}</div>

                {"description" in p && typeof (p as any).description === "string" ? (
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {(p as any).description}
                  </p>
                ) : null}

                <div className="mt-4">
                  <a
                    className="text-sm font-medium text-slate-700 hover:text-slate-900"
                    href="/projects"
                  >
                    See details →
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg font-bold">Experience</h2>
            <a
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
              href="/experience"
            >
              View all →
            </a>
          </div>

          <div className="mt-4 grid gap-4">
            {profile.experience.slice(0, 3).map((e) => (
              <Card key={`${e.company}-${e.role}`} className="p-4">
                <div className="font-bold">{e.role}</div>

                <div className="mt-1 text-sm text-slate-600">
                  {e.company} • {e.start} – {e.end}
                  {e.location ? ` • ${e.location}` : ""}
                  {e.mode ? ` • ${e.mode}` : ""}
                </div>

                {e.highlights?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.highlights.map((h) => (
                      <Badge key={h}>{h}</Badge>
                    ))}
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </section>

      </div>
    </Container>
  );
}

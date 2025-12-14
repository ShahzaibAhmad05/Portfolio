import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { profile } from "../data/profileData";

export default function Experience() {
  return (
    <Container>
      <div className="py-5 pb-12">
        <div className="mb-3 flex items-baseline justify-between gap-4">
          <h2 className="text-[18px] font-bold">Experience</h2>
        </div>

        <div className="grid gap-4">
          {profile.experience.map((e) => (
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
      </div>
    </Container>
  );
}

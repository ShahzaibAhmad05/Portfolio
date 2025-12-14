import { NavLink } from "react-router-dom";
import { Container } from "./Container";
// import { profile } from "../data/profileData";

const items = [
  { to: "/", label: "Profile" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/certifications", label: "Certifications" },
];

export function Navbar() {
  return (
    <div className="sticky top-0 z-10 border-b border-slate-900/10 bg-slate-50/75 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="font-extrabold tracking-[-0.02em]">My Portfolio</div>

          <div className="flex flex-wrap items-center justify-end gap-2">
            {items.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                end={it.to === "/"}
                className={({ isActive }) =>
                  [
                    "rounded-xl px-3 py-2 text-sm transition",
                    isActive
                      ? "border border-slate-900/10 bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm",
                  ].join(" ")
                }
              >
                {it.label}
              </NavLink>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

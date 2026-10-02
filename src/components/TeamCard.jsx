export default function TeamCard({
  number,
  image,
  imagePosition = "center",
  name,
  role,
  description,
  linkedin,
  github,
}) {
  const label = `Participant ${number}`;

  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl border border-line bg-white/35 p-5">
      <div className="mb-7 flex aspect-[5/4] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#dce4e9]">
        {image ? (
          <img
            src={image}
            alt={name || label}
            loading="lazy"
            className="h-full w-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
        ) : (
          <span
            aria-hidden="true"
            className="font-mono text-5xl font-light tracking-tighter text-[#a7b6c2]"
          >
            {number}
          </span>
        )}
      </div>
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        // team member {number}
      </p>
      <h3 className="min-h-14 break-words text-lg font-semibold tracking-tight">
        {name || label}
      </h3>
      {role && <p className="mt-2 text-sm text-muted">{role}</p>}
      {description && (
        <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      )}
      {(linkedin || github) && (
        <div className="mt-auto flex gap-5 pt-5 font-mono text-xs text-muted">
          {linkedin && (
            <a
              className="underline decoration-line underline-offset-4 hover:text-ink hover:decoration-current"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name || label} on LinkedIn (opens in a new tab)`}
            >
              LinkedIn ↗
            </a>
          )}
          {github && (
            <a className="underline underline-offset-4" href={github}>
              GitHub ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}

"use client";

type Props = {
  url: string;
  title: string;
};

function getLoomEmbedUrl(url: string): string | null {
  // Handles:
  //   https://www.loom.com/share/HASH
  //   https://loom.com/share/HASH
  const match = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
  if (!match) return null;
  return `https://www.loom.com/embed/${match[1]}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`;
}

function isDirectVideo(url: string): boolean {
  return /\.(mp4|webm|ogg)$/i.test(url);
}

export function CaseStudyVideo({ url, title }: Props) {
  if (!url) return null;

  const loomEmbedUrl = getLoomEmbedUrl(url);

  return (
    <div className="my-10">
      {/* Label */}
      <p className="mb-3 font-mono text-label uppercase tracking-widest text-muted">
        Walkthrough
      </p>

      {/* Video container — 16:9 with rounded border */}
      <div className="relative overflow-hidden rounded border border-border bg-surface"
           style={{ paddingBottom: "56.25%" /* 16:9 */ }}>

        {loomEmbedUrl ? (
          <iframe
            src={loomEmbedUrl}
            title={`${title} — walkthrough`}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen"
            className="absolute inset-0 h-full w-full"
          />
        ) : isDirectVideo(url) ? (
          <video
            src={url}
            title={`${title} — walkthrough`}
            controls
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          // Fallback: external link (e.g. YouTube, Vimeo)
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-small text-muted transition-colors hover:text-accent"
            >
              Watch walkthrough ↗
            </a>
          </div>
        )}
      </div>

      {/* Note for login-gated apps */}
      <p className="mt-2 font-mono text-label text-dim">
        Login required — walkthrough shows the full interface.
      </p>
    </div>
  );
}

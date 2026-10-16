import type { ReactNode } from "react";
import StatusSelector from "./status-selector";
import ThemeToggle from "./theme-toggle";

type IconName = "campus" | "compass" | "rooms" | "profile" | "arrow" | "hand" | "move";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    campus: (
      <>
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
        <path d="M9 21v-8h6v8M9 8h.01M15 8h.01" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.7 8.3-2.3 5.1-5.1 2.3 2.3-5.1z" />
      </>
    ),
    rooms: (
      <>
        <path d="M4 20V8l8-5 8 5v12M8 20v-7h8v7M2 20h20" />
        <path d="M11 13v7m2-7v7" />
      </>
    ),
    profile: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21a7 7 0 0 1 14 0" />
      </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    hand: (
      <>
        <path d="M8 12V5a1.5 1.5 0 0 1 3 0v6-8a1.5 1.5 0 0 1 3 0v8-6a1.5 1.5 0 0 1 3 0v7-4a1.5 1.5 0 0 1 3 0v7a8 8 0 0 1-8 8h-1a7 7 0 0 1-5.7-2.9L3.6 16a1.7 1.7 0 0 1 2.7-2.1L8 16z" />
      </>
    ),
    move: (
      <>
        <path d="M12 3v18M3 12h18m-9-9-3 3m3-3 3 3m6 6-3-3m3 3-3 3m-6 6-3-3m3 3 3-3m-18-9 3-3m-3 3 3 3" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

const navigation = [
  { label: "Campus", href: "#campus", icon: "campus" },
  { label: "Spaces", href: "#spaces", icon: "rooms" },
  { label: "Profile", href: "#profile", icon: "profile" },
] as const;

function CampusScene() {
  return (
    <svg
      aria-hidden="true"
      className="campus-scene"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 780"
    >
      <defs>
        <linearGradient id="scene-sky" x1="720" x2="720" y1="0" y2="580" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9dc9d1" />
          <stop offset=".62" stopColor="#d9e8d7" />
          <stop offset="1" stopColor="#eef0d6" />
        </linearGradient>
        <linearGradient id="scene-lawn" x1="720" x2="720" y1="420" y2="780" gradientUnits="userSpaceOnUse">
          <stop stopColor="#91b897" />
          <stop offset="1" stopColor="#477660" />
        </linearGradient>
        <linearGradient id="scene-stone" x1="700" x2="720" y1="470" y2="780" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f3e7ca" />
          <stop offset="1" stopColor="#c4b892" />
        </linearGradient>
        <linearGradient id="main-facade" x1="720" x2="720" y1="226" y2="550" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f5f0e3" />
          <stop offset="1" stopColor="#cfc6ad" />
        </linearGradient>
        <linearGradient id="glass-facade" x1="1007" x2="1267" y1="320" y2="545" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b9d4ce" />
          <stop offset=".46" stopColor="#628e8a" />
          <stop offset="1" stopColor="#355d64" />
        </linearGradient>
        <linearGradient id="wing-facade" x1="276" x2="549" y1="347" y2="550" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e2decd" />
          <stop offset="1" stopColor="#b9b9a4" />
        </linearGradient>
        <filter id="building-shadow" width="1.2" height="1.3" x="-.1" y="-.1">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <path fill="url(#scene-sky)" d="M0 0h1440v780H0z" />
      <circle cx="1155" cy="148" r="62" fill="#f6df9b" opacity=".9" />
      <circle cx="1155" cy="148" r="91" fill="#f6df9b" opacity=".18" />
      <path d="M0 346c112-52 192-32 303-3 91 24 161 22 270-24 116-48 196-49 307-3 124 52 194 39 302-5 97-39 173-28 258 3v213H0z" fill="#9fbc9e" opacity=".53" />
      <path d="M0 400c114-43 189-24 293 8 94 29 186 19 287-23 131-54 206-37 316 5 111 42 192 37 304-8 94-37 163-23 240 7v179H0z" fill="#769b82" opacity=".62" />
      <path d="M0 477c148-56 261-20 376 13 121 35 209 11 328-28 127-41 203-29 315 14 125 48 229 34 335-6 38-14 65-21 86-23v333H0z" fill="url(#scene-lawn)" />

      <g opacity=".7">
        <path d="M115 364h65m-40-18 40 18-40 20m1150-15h63m-38-18 38 18-38 18" stroke="#e9edcf" strokeWidth="3" />
        <path d="M260 429h40m-22-14 22 14-22 15m888-16h45m-27-15 27 15-27 15" stroke="#dbe9c8" strokeWidth="3" />
      </g>

      <ellipse cx="715" cy="553" fill="#284d42" filter="url(#building-shadow)" opacity=".4" rx="461" ry="45" />

      <g>
        <path d="M220 370h378v181H220z" fill="url(#wing-facade)" />
        <path d="m197 372 212-108 212 108z" fill="#617d79" />
        <path d="M219 365h380v14H219z" fill="#e8dfc8" />
        <path d="M251 398h315v13H251zm0 66h315v13H251z" fill="#c0bca8" />
        <path d="M272 406h37v42h-37zm82 0h37v42h-37zm82 0h37v42h-37zm82 0h37v42h-37zm-246 66h37v45h-37zm82 0h37v45h-37zm82 0h37v45h-37zm82 0h37v45h-37z" fill="#55777a" />
        <path d="M289 410v34m82-34v34m82-34v34m82-34v34m-246 36v37m82-37v37m82-37v37m82-37v37" stroke="#a9c6bd" strokeWidth="4" />
        <path d="M318 346v-38h18v38m-14-38h10m104 38v-38h18v38m-14-38h10" stroke="#e6dcc4" strokeWidth="5" />
      </g>

      <g>
        <path d="M953 348h315v203H953z" fill="url(#glass-facade)" />
        <path d="m930 349 180-87 183 87z" fill="#365860" />
        <path d="M949 343h324v13H949z" fill="#e7e2ce" />
        <path d="M974 376h274v9H974zm0 61h274v9H974zm0 61h274v9H974z" fill="#e4e0cb" opacity=".9" />
        <path d="M1000 380v52m66-52v52m67-52v52m67-52v52m-200 11v52m66-52v52m67-52v52m67-52v52m-200 11v50m66-50v50m67-50v50m67-50v50" stroke="#d8e4d6" strokeWidth="5" opacity=".85" />
        <path d="M970 519h280v32H970z" fill="#3d6263" />
      </g>

      <g>
        <path d="M565 306h310v247H565z" fill="url(#main-facade)" />
        <path d="m527 311 193-112 193 112z" fill="#526f73" />
        <path d="m558 302 162-92 162 92z" fill="#f0e8d5" />
        <path d="m606 288 114-65 114 65z" fill="#536f72" />
        <path d="M548 302h344v19H548z" fill="#e5d7b8" />
        <path d="M577 337h286v11H577zm0 112h286v11H577z" fill="#c8bfa9" />
        <path d="M595 346h36v87h-36zm73 0h36v87h-36zm73 0h36v87h-36zm73 0h36v87h-36z" fill="#64858a" />
        <path d="M602 352v74m73-74v74m73-74v74m73-74v74" stroke="#c4dbd2" strokeWidth="4" />
        <path d="M693 436h54v117h-54z" fill="#415f62" />
        <path d="M700 442h40v73h-40z" fill="#8aa8a0" />
        <path d="M719 442v73" stroke="#d5d0b8" strokeWidth="3" />
        <path d="M612 291h22v-32h-22zm194 0h22v-32h-22z" fill="#d7c8a7" />
        <path d="M714 259v-42h12v42m-17-42h22" stroke="#e5d5b3" strokeWidth="5" />
        <circle cx="720" cy="211" r="9" fill="#e5d5b3" />
      </g>

      <path d="M0 540c206-34 398-30 566-4 56 9 109 14 154 14 52 0 105-5 160-14 181-29 369-29 560 4v240H0z" fill="#548267" opacity=".43" />
      <path d="m599 538 121-22 121 22-42 242H641z" fill="url(#scene-stone)" />
      <path d="m685 546 35-10 35 10-13 234h-44z" fill="#e4d7ba" opacity=".84" />
      <path d="M579 548h282v12H579zM596 575h248v8H596zm15 29h218v6H611z" fill="#b9ac89" opacity=".72" />
      <path d="m566 546 154 36 154-36M620 612l100 22 100-22M649 688l71 18 71-18" stroke="#b3a887" strokeWidth="3" opacity=".72" />

      <g>
        <path d="M110 570v-98h13v98" fill="#775f48" />
        <circle cx="116" cy="438" r="57" fill="#588a69" />
        <circle cx="79" cy="463" r="38" fill="#72a477" />
        <circle cx="153" cy="465" r="42" fill="#699b70" />
        <circle cx="116" cy="409" r="34" fill="#7ead7c" />
        <path d="M113 513h10m-13 18h16m-18 18h19" stroke="#a8c99a" strokeWidth="3" opacity=".8" />

        <path d="M311 560v-66h10v66" fill="#80674e" />
        <circle cx="316" cy="473" r="42" fill="#58896a" />
        <circle cx="288" cy="490" r="28" fill="#74a47a" />
        <circle cx="344" cy="492" r="30" fill="#699a70" />

        <path d="M1307 566v-108h14v108" fill="#775f48" />
        <circle cx="1314" cy="424" r="59" fill="#568669" />
        <circle cx="1274" cy="455" r="38" fill="#73a578" />
        <circle cx="1357" cy="451" r="40" fill="#65966c" />
        <circle cx="1314" cy="396" r="35" fill="#80ac7a" />

        <path d="M1108 549v-71h10v71" fill="#80674e" />
        <circle cx="1113" cy="458" r="39" fill="#5b8c6a" />
        <circle cx="1087" cy="474" r="27" fill="#73a579" />
        <circle cx="1140" cy="478" r="29" fill="#68996e" />
      </g>

      <g stroke="#e9dcba" strokeLinecap="round" strokeWidth="5" opacity=".82">
        <path d="M225 570v-38" />
        <path d="M207 548h36" />
        <path d="M1214 571v-43" />
        <path d="M1194 550h40" />
      </g>
      <g fill="#f5d68c">
        <circle cx="225" cy="531" r="5" />
        <circle cx="1214" cy="527" r="5" />
      </g>

      <g fill="#d4e6c3">
        <circle cx="389" cy="581" r="4" />
        <circle cx="422" cy="600" r="3" />
        <circle cx="1013" cy="584" r="4" />
        <circle cx="1053" cy="609" r="3" />
        <circle cx="270" cy="666" r="4" />
        <circle cx="1163" cy="676" r="4" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="world-shell">
      <header className="world-header">
        <a aria-label="CampusVerse AI home" className="brand" href="#campus">
          <span className="brand-mark">
            <svg aria-hidden="true" fill="none" viewBox="0 0 36 36">
              <path
                d="M7 24.5 18 8l11 16.5M11.5 24.5h13M15 19.2h6M18 8v20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <circle cx="18" cy="28" r="2" fill="currentColor" />
            </svg>
          </span>
          <span className="brand-copy">
            <strong>CampusVerse <span>AI</span></strong>
            <small>VIRTUAL CAMPUS</small>
          </span>
        </a>

        <nav aria-label="Main navigation" className="world-nav">
          {navigation.map(({ label, href, icon }, index) => (
            <a aria-current={index === 0 ? "page" : undefined} className="world-nav-link" href={href} key={label}>
              <Icon name={icon} />
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <a aria-label="Go to profile" className="top-avatar" href="#profile">CV</a>
        </div>
      </header>

      <main className="world-main">
        <section aria-label="Static virtual campus preview" className="world-stage" id="campus">
          <div className="scene-art">
            <CampusScene />
            <div className="scene-vignette" />
          </div>

          <div className="world-intro">
            <span className="world-kicker"><span /> A NEW KIND OF CAMPUS</span>
            <h1>Your campus.<br /><span>Your world.</span></h1>
            <p>Find your place to learn, create, and connect.</p>
            <a className="primary-action" href="#spaces">
              Discover campus spaces <Icon name="arrow" />
            </a>
          </div>

          <div aria-label="Static preview, not interactive 3D" className="scene-state">
            <span className="scene-state-mark" />
            <span><strong>Campus preview</strong><small>Static concept · 3D planned</small></span>
          </div>

          <div className="scene-location">
            <span className="location-symbol"><Icon name="campus" /></span>
            <span><strong>Central Quad</strong><small>The heart of campus</small></span>
          </div>

          <section aria-labelledby="status-title" className="status-console" id="profile">
            <div className="status-console-heading">
              <span className="profile-avatar">CV</span>
              <span><strong id="status-title">Campus visitor</strong><small>Your local status</small></span>
            </div>
            <StatusSelector />
          </section>

          <span className="scene-coordinates" aria-hidden="true">35°41&apos;N&nbsp;&nbsp; 139°41&apos;E</span>
        </section>

        <section aria-labelledby="spaces-title" className="spaces-section" id="spaces">
          <div className="spaces-heading">
            <div>
              <p className="section-kicker">A PLACE FOR EVERY PART OF CAMPUS LIFE</p>
              <h2 id="spaces-title">Find your space.</h2>
            </div>
            <p className="spaces-description">A first look at the places we are building for the campus community.</p>
          </div>

          <div className="space-list">
            <article className="space-item">
              <span className="space-number">01</span>
              <span className="space-icon"><Icon name="rooms" /></span>
              <span className="space-copy"><strong>Study Lounge</strong><small>A quieter corner for shared focus.</small></span>
              <span className="space-state">PLANNED</span>
            </article>
            <article className="space-item">
              <span className="space-number">02</span>
              <span className="space-icon space-icon-violet"><Icon name="compass" /></span>
              <span className="space-copy"><strong>Project Studio</strong><small>Bring ideas together and make them real.</small></span>
              <span className="space-state">PLANNED</span>
            </article>
          </div>

          <footer className="world-footer">
            <a aria-label="CampusVerse AI home" className="footer-brand" href="#campus">CampusVerse <span>AI</span></a>
            <p><Icon name="move" /> Avatar movement and <Icon name="hand" /> gesture controls are planned. No camera or microphone is accessed.</p>
            <span>EARLY VISUAL PREVIEW</span>
          </footer>
        </section>
      </main>
    </div>
  );
}

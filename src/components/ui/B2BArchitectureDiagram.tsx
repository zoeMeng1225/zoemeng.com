import { cn } from "@/lib/utils";

export function B2BArchitectureDiagram() {
  const purple = {
    bg: "#E2DBF4",
    stroke: "#745DAC",
    title: "#513D82",
    sub: "#745DAC",
  };
  const teal = {
    bg: "#E1F5EE",
    stroke: "#0F6E56",
    title: "#085041",
    sub: "#0F6E56",
  };
  const gray = {
    bg: "#F5F3EF",
    stroke: "#D1CCC4",
    title: "#1a1a1a",
    sub: "#999999",
  };
  const arrow = "#999999";

  return (
    <svg
      width="100%"
      viewBox="0 0 680 360"
      role="img"
      aria-label="B2B Quote system architecture diagram"
      className={cn("rounded-xl")}
    >
      {/* Arrow marker */}
      <defs>
        <marker
          id="arch-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke={arrow}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>

      {/* Row 1: Interfaces */}
      <rect
        x="40"
        y="30"
        width="260"
        height="56"
        rx="8"
        fill={purple.bg}
        stroke={purple.stroke}
        strokeWidth="0.5"
      />
      <text
        x="170"
        y="48"
        textAnchor="middle"
        dominantBaseline="central"
        fill={purple.title}
        fontSize="14"
        fontWeight="500"
        fontFamily="var(--font-display)"
      >
        Customer storefront
      </text>
      <text
        x="170"
        y="66"
        textAnchor="middle"
        dominantBaseline="central"
        fill={purple.sub}
        fontSize="12"
      >
        Quote Cart, inquiry, staff CC
      </text>

      <rect
        x="380"
        y="30"
        width="260"
        height="56"
        rx="8"
        fill={teal.bg}
        stroke={teal.stroke}
        strokeWidth="0.5"
      />
      <text
        x="510"
        y="48"
        textAnchor="middle"
        dominantBaseline="central"
        fill={teal.title}
        fontSize="14"
        fontWeight="500"
        fontFamily="var(--font-display)"
      >
        Admin dashboard
      </text>
      <text
        x="510"
        y="66"
        textAnchor="middle"
        dominantBaseline="central"
        fill={teal.sub}
        fontSize="12"
      >
        Remix + Shopify Polaris
      </text>

      {/* Row 2: Data layer */}
      <rect
        x="40"
        y="150"
        width="260"
        height="56"
        rx="8"
        fill={gray.bg}
        stroke={gray.stroke}
        strokeWidth="0.5"
      />
      <text
        x="170"
        y="168"
        textAnchor="middle"
        dominantBaseline="central"
        fill={gray.title}
        fontSize="14"
        fontWeight="500"
        fontFamily="var(--font-display)"
      >
        Remix API routes
      </text>
      <text
        x="170"
        y="186"
        textAnchor="middle"
        dominantBaseline="central"
        fill={gray.sub}
        fontSize="12"
      >
        api.shopify.jsx
      </text>

      <rect
        x="380"
        y="150"
        width="260"
        height="56"
        rx="8"
        fill={gray.bg}
        stroke={gray.stroke}
        strokeWidth="0.5"
      />
      <text
        x="510"
        y="168"
        textAnchor="middle"
        dominantBaseline="central"
        fill={gray.title}
        fontSize="14"
        fontWeight="500"
        fontFamily="var(--font-display)"
      >
        Cloudflare D1
      </text>
      <text
        x="510"
        y="186"
        textAnchor="middle"
        dominantBaseline="central"
        fill={gray.sub}
        fontSize="12"
      >
        Drizzle ORM
      </text>

      {/* Row 3: External services */}
      <rect
        x="40"
        y="275"
        width="130"
        height="56"
        rx="8"
        fill={gray.bg}
        stroke={gray.stroke}
        strokeWidth="0.5"
      />
      <text
        x="105"
        y="293"
        textAnchor="middle"
        dominantBaseline="central"
        fill={gray.title}
        fontSize="14"
        fontWeight="500"
        fontFamily="var(--font-display)"
      >
        AWS SES
      </text>
      <text
        x="105"
        y="311"
        textAnchor="middle"
        dominantBaseline="central"
        fill={gray.sub}
        fontSize="12"
      >
        Email service
      </text>

      <rect
        x="190"
        y="275"
        width="130"
        height="56"
        rx="8"
        fill={gray.bg}
        stroke={gray.stroke}
        strokeWidth="0.5"
      />
      <text
        x="255"
        y="293"
        textAnchor="middle"
        dominantBaseline="central"
        fill={gray.title}
        fontSize="14"
        fontWeight="500"
        fontFamily="var(--font-display)"
      >
        CDTFA API
      </text>
      <text
        x="255"
        y="311"
        textAnchor="middle"
        dominantBaseline="central"
        fill={gray.sub}
        fontSize="12"
      >
        CA tax rates
      </text>

      <rect
        x="340"
        y="275"
        width="130"
        height="56"
        rx="8"
        fill={gray.bg}
        stroke={gray.stroke}
        strokeWidth="0.5"
      />
      <text
        x="405"
        y="293"
        textAnchor="middle"
        dominantBaseline="central"
        fill={gray.title}
        fontSize="14"
        fontWeight="500"
        fontFamily="var(--font-display)"
      >
        jsPDF
      </text>
      <text
        x="405"
        y="311"
        textAnchor="middle"
        dominantBaseline="central"
        fill={gray.sub}
        fontSize="12"
      >
        Client-side PDF
      </text>

      <rect
        x="490"
        y="275"
        width="150"
        height="56"
        rx="8"
        fill={purple.bg}
        stroke={purple.stroke}
        strokeWidth="0.5"
      />
      <text
        x="565"
        y="293"
        textAnchor="middle"
        dominantBaseline="central"
        fill={purple.title}
        fontSize="14"
        fontWeight="500"
        fontFamily="var(--font-display)"
      >
        Shopify GraphQL
      </text>
      <text
        x="565"
        y="311"
        textAnchor="middle"
        dominantBaseline="central"
        fill={purple.sub}
        fontSize="12"
      >
        Products, draft orders
      </text>

      {/* Arrows */}
      <line
        x1="170"
        y1="86"
        x2="170"
        y2="148"
        stroke={arrow}
        strokeWidth="1"
        markerEnd="url(#arch-arrow)"
      />
      <text x="182" y="120" fill={gray.sub} fontSize="12">
        submit
      </text>

      <line
        x1="510"
        y1="86"
        x2="510"
        y2="148"
        stroke={arrow}
        strokeWidth="1"
        markerEnd="url(#arch-arrow)"
      />
      <text x="522" y="120" fill={gray.sub} fontSize="12">
        read / write
      </text>

      <line
        x1="300"
        y1="178"
        x2="378"
        y2="178"
        stroke={arrow}
        strokeWidth="1"
        markerEnd="url(#arch-arrow)"
      />

      <line
        x1="105"
        y1="206"
        x2="105"
        y2="273"
        stroke={arrow}
        strokeWidth="1"
        markerEnd="url(#arch-arrow)"
      />
      <text x="117" y="242" fill={gray.sub} fontSize="12">
        auto emails
      </text>

      <line
        x1="565"
        y1="206"
        x2="565"
        y2="273"
        stroke={arrow}
        strokeWidth="1"
        markerEnd="url(#arch-arrow)"
      />
      <text x="504" y="242" fill={gray.sub} fontSize="12">
        mutations
      </text>

      {/* Dashed lines for indirect connections */}
      <line
        x1="255"
        y1="206"
        x2="255"
        y2="273"
        stroke={gray.stroke}
        strokeWidth="0.5"
        strokeDasharray="4 3"
        markerEnd="url(#arch-arrow)"
      />
      <line
        x1="405"
        y1="150"
        x2="405"
        y2="273"
        stroke={gray.stroke}
        strokeWidth="0.5"
        strokeDasharray="4 3"
        markerEnd="url(#arch-arrow)"
      />
    </svg>
  );
}

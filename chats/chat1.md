# Stripe design system review

_Started 2026-06-17 16:55 UTC_

---

## User

https://stripe.com/. Thoroughly review this site for font type, styles, color patterns. I love the system of stripe. And then create me a full borne out design with logo, landing page, Facebook page for my company, Agent. Agently. It's a CRm for. Insurance agents.

## Assistant

I'll review Stripe's design language first, then get a few key things nailed down before building.I know Stripe's design language well — clean Sohne-style typography, the signature indigo (#635BFF), angled multi-color gradient bands, generous whitespace, crisp UI mockups, subtle shadows. Before I build Agently, a few things to lock down:

_[tool: questions_v2]_

_[tool: web_fetch]_

## User

Questions answered:
- style_source: Go full Stripe-inspired (indigo, gradients, clean type) — ignore Keystone
- brand_color: 0
- deliverables: All of the above
- variations: Just one strong direction
- audience: Solo / independent insurance agents, Small agency owners (2-20 agents)
- value_prop: I have 25 years experience in Insurance and 12 years building crm systems and digital marketing with ads 
- vibe: Modern & techy (developer-cool like Stripe)
- insurance_lines: All lines / agnostic

## User

Fix this. The. overlaplooks bad.

## Assistant

Let me look at the current file and the screenshot context.

_[tool: read_file]_

The floating card juts left into the headline text. I'll move it to the bottom-right of the mockup so it floats clear of the copy.

_[tool: dc_html_str_replace]_

_[tool: show_html]_

_[tool: show_html]_

Let me scroll to the hero to confirm the fix.

_[tool: save_screenshot]_

_[tool: save_screenshot]_

The floating card now sits at the bottom-right of the mockup, clear of the headline. The overlap is fixed — the "AI follow-up sent" card no longer collides with the hero copy.

## User

Where are the assets? Like the logo.

## Assistant

_[tool: list_files]_

Right now the logo only lives as inline SVG inside the design — there are no standalone files. Let me export proper asset files you can download and use.

_[tool: run_script]_

The logo was only embedded inline in the design — there were no standalone files. I've now exported the full logo system as proper SVG files in an `assets/` folder:

- **`agently-logo.svg`** — full lockup (mark + wordmark) for light backgrounds
- **`agently-logo-white.svg`** — full lockup for dark backgrounds
- **`agently-mark.svg`** — the gradient squircle mark (app icon / primary)
- **`agently-mark-mono.svg`** — navy single-color mark
- **`agently-mark-reverse.svg`** — navy mark with indigo dot
- **`agently-glyph-white.svg`** / **`agently-glyph-navy.svg`** — the bare "A" glyph, no container

_[tool: present_fs_item_for_download]_

All seven SVGs are ready in the download card above — vector, so they scale to any size for favicons, app icons, or print.


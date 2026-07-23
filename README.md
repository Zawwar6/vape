# Reserve — Premium Vape Brand Website

A luxury, dark-themed, Apple/Nothing-inspired frontend demo built with React + Vite, Tailwind CSS, Framer Motion, React Icons, and Swiper.

This is a **frontend-only portfolio demo** — there is no backend, no real payments, and no real product sales. All product data is placeholder content for design purposes.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Pages

| Route | Page |
|---|---|
| / | Home |
| /about | About Us |
| /products | Products (filter, search, quick view, pagination) |
| /how-to-order | How To Order (step timeline) |
| /gallery | Gallery (masonry + lightbox) |
| /verify-account | Verify Account (glass card form) |
| /contact | Contact Us (form + FAQ) |

## Structure

```
src/
  components/
    layout/    -> Navbar, Footer
    ui/        -> Reveal, GlowButton, Eyebrow, Counter, Marquee, Loader, etc.
    home/      -> Hero, FeaturedCategories, BestSellers, Stats, Reviews, ...
    about/     -> AboutHero, Timeline, Team, Values, ...
    products/  -> ProductCard, ProductFilters, QuickViewModal
  pages/       -> Home, About, Products, HowToOrder, Gallery, VerifyAccount, Contact
  data/        -> products.js, siteData.js (dummy content)
  hooks/, utils/, assets/  -> reserved for future use
```

## Notes

- Colors, fonts, and animation tokens live in tailwind.config.js.
- Product images are pulled from Unsplash for demo purposes -- swap with real product photography before shipping to a client.
- Forms (newsletter, contact, verify account) are UI-only and do not submit anywhere.

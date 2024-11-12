export const navbarLinks = [
  { name: "Home", href: "/"},

  {
    name: "Features",
    subLinks: [
      { name: "Download Movie", href: "/download-movie" },
      { name: "Premium Content", href: "/premium-content" },
      { name: "Playlist", href: "/playlist" },
      { name: "Genres", href: "/genres" },
      { name: "Cast", href: "/cast" },
      { name: "Tags", href: "/tags" },
    ],
  },
  {
    name: "Pages",
    subLinks: [
      { name: "About Us", href: "/about-us" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      {
        name: "Popular",
        subLinks: [
          { name: "Popular Movie", href: "/popular-movie" },
          { name: "Popular Series", href: "/popular-series" },
          { name: "Popular Genre", href: "/popular-genre" },
          { name: "Popular Actor", href: "/popular-actor" },
        ],
      },
    ],
  },
  { name: "Pricing", href: "/pricing"},
  {
    name: "Profile",
    subLinks: [
      { name: "My Account", href: "/my-account" },
      { name: "History", href: "/history" },
      { name: "Wishlist", href: "/wishlist" },
      { name: "Recommended", href: "/recommended" },
      { name: "Settings", href: "/settings" },
    ],
  },
];

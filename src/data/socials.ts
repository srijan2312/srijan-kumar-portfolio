import type { SocialLink } from "@/types";
import { site } from "./site";

/**
 * Real, user-confirmed profile URLs only. Never invent URLs.
 */
export const socials: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/srijan2312",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/srijan-kumar-2b41b124a/",
  },
  {
    id: "leetcode",
    label: "LeetCode",
    href: "https://leetcode.com/u/vickysrijan/",
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${site.email}`,
  },
];

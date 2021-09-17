---
sidebar_position: 1
---

# About

Quite a few sites use an introductory document such as **Welcome**, **About**, **Getting Started**, and **Overview**. Note that this `docs/intro.md` file's **frontmatter** explicitly positions it as the first item in the sidebar, ahead of the auto-generated items.

```md title="docs/intro.md" {1-3}
---
sidebar_position: 1
---

# About

Quite a few sites use an introductory document such as **Welcome**, **About**, **Getting Started**, ...
```

It's probably best to keep the home page `pages/index.js` simple and minimalistic if all we're doing is exposing release notes, etc. Perhaps provide text/image links directly to the release note docs for our supported core products.

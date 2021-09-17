---
slug: here-we-go
title: Here We Go
authors: [rmarens]
tags: [markdown, dms 2, release notes]
---

Started working with **Docusaurus** today... *RAWR* :grin:

There's quite a bit to digest here but it gives off a warm, familiar feeling.

- changing the default `favicon.ico` was easy
- changing the default `logo.svg` was easy

:::tip blogging

Publish a blog entry by creating a `yyyy-mm-dd-blog-post-title.md` file within the `blog` directory. If including an image, create a `yyyy-mm-dd-blog-post-title` subdirectory for the `index.md` and image files.

:::

:::info searching

Searching via [Algolia DocSearch](https://community.algolia.com/docsearch/) will require a publicly available website and API key registration. Though the search bar can be made to look nice per the screenshot below, I'm not sure if this is the right search for us due to the publicly hosted requirement.

![Docusaurus Plushie](./searchbar.png)

Fortunately, Docusaurus' [Amazing Resources](https://docusaurus.io/community/resources) lists some offline/local search alternatives:

- [docusaurus-lunr-search](https://www.npmjs.com/package/docusaurus-lunr-search)
- [docusaurus-local-search](https://github.com/cmfcmf/docusaurus-search-local)

:::
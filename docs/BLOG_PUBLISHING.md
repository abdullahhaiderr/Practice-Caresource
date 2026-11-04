# Publishing a PracticeCareSource blog post

The public blog is powered by `src/data/blog.ts`. Each post is a structured content entry, so you can publish without changing page layouts or installing packages.

## Quick publishing workflow

1. Open the repository on GitHub: https://github.com/abdullahhaiderr/Practice-Caresource
2. Open `src/data/blog.ts`.
3. Select **Edit this file**.
4. Copy an existing post object inside the `blogPosts` array and paste it at the top of the array.
5. Replace the fields using the template below.
6. Add your article sections and paragraphs. Keep the slug lowercase and use hyphens.
7. Commit the change to `main`. The site build process will pick up the new post when deployments are enabled.

## Article template

```ts
{
  slug: "your-article-topic",
  title: "Your Article Title",
  description: "A clear one or two sentence summary that explains what readers will learn.",
  date: "2026-11-04",
  category: "Medical Billing",
  readTime: "5 min read",
  sections: [
    {
      heading: "Start with the main question",
      paragraphs: [
        "Write a useful opening paragraph that answers the reader's question directly.",
        "Add context, practical details, and examples in a second paragraph."
      ],
      bullets: [
        "A practical point readers can use",
        "Another important detail"
      ]
    },
    {
      heading: "What practices should consider",
      paragraphs: [
        "Explain the next part of the topic in plain language."
      ]
    }
  ]
}
```

## SEO and answer-engine checklist

- Use one clear article title that matches a real question a practice administrator may search.
- Put the direct answer in the opening paragraph.
- Use descriptive section headings phrased around the reader's questions.
- Explain terms such as RCM, AR, CPT, and denial management on first use.
- Keep the description unique and factual. Do not promise guaranteed collections or reimbursement.
- Use current payer and regulatory information, and link to authoritative sources when relevant.
- Never include patient names, dates of birth, claim numbers, screenshots, or other protected health information.
- Set the correct publication date and a realistic reading time.

## Important note

This is the current GitHub-based publishing workflow, not a browser-based CMS dashboard. A visual editor can be added later through a CMS such as Sanity or another approved provider, but that requires choosing and configuring the service and its access credentials.

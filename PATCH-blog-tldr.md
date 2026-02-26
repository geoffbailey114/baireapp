# MANUAL PATCH: app/blog/[slug]/page.tsx

All other files in this zip are drop-in replacements. This one file needs a small insert because I don't have the full source.

## What to do

Open `app/blog/[slug]/page.tsx` and find the `</header>` tag (around the end of the post header section with title, date, author, etc).

**Insert this block immediately after `</header>` and before the post body content:**

```tsx
          {/* TL;DR — GEO Extraction Beacon */}
          {post.tldr && (
            <div className="mb-10 rounded-xl border-l-4 border-sage-500 bg-sage-50 px-6 py-5">
              <p className="text-xs font-bold tracking-[0.12em] uppercase text-sage-600 mb-2">
                TL;DR
              </p>
              <p className="text-slate-700 leading-relaxed text-base">
                {post.tldr}
              </p>
            </div>
          )}
```

That's it. The `tldr` field is already added to BlogPostMeta in `lib/blog/types.ts` (included in this zip). Existing posts without a `tldr` won't render anything — zero visual change until you add `tldr` strings to individual posts.

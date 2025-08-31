"use client";

import * as React from "react";
import type { Config } from "@measured/puck";
import Icon from "@/components/AppIcon";

const ArticleHeader: Config["components"][string] = {
  fields: {
    title:    { type: "text",     label: "Title" },
    subtitle: { type: "textarea", label: "Subtitle" },
    author:   { type: "text",     label: "Author" },
    date:     { type: "text",     label: "Date" },
    readTime: { type: "text",     label: "Read Time" },
  },
  render: ({ title, subtitle, author, date, readTime }) => (
    <header className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">{title}</h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">{subtitle}</p>
      <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
        <span>{author}</span><span>•</span><span>{date}</span><span>•</span><span>{readTime} min read</span>
      </div>
    </header>
  ),
};

const TextContent: Config["components"][string] = {
  fields: { content: { type: "textarea", label: "Body" } },
  render: ({ content }) => (
    <div className="max-w-3xl mx-auto px-6 py-6">
      <p className="text-lg text-gray-700 leading-relaxed">{content}</p>
    </div>
  ),
};

const ImageBlock: Config["components"][string] = {
  fields: {
    src:     { type: "text", label: "Image URL" },
    alt:     { type: "text", label: "Alt text" },
    caption: { type: "text", label: "Caption" },
  },
  render: ({ src, alt, caption }) => (
    <figure className="max-w-5xl mx-auto px-6 py-8">
      <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
      {caption && <figcaption className="text-sm text-gray-500 mt-4 text-center">{caption}</figcaption>}
    </figure>
  ),
};

export const blogConfig: Config = {
  components: { ArticleHeader, TextContent, ImageBlock },
};
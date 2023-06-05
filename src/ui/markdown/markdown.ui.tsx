// import { PropsWithChildren } from "react";
import { LinkIcon } from "@sextival/components/icon";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
}

export const Markdown = ({ content }: Props) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      h2: (options) => (
        <h2 className="mt-4 text-3xl text-left">{options.children}</h2>
      ),
      h3: (options) => {
        return <h3 className="mt-2 text-2xl text-left">{options.children}</h3>;
      },
      ul: (options) => {
        return (
          <ul className="list-disc list-inside ml-2">{options.children}</ul>
        );
      },
      a: (options) => {
        return (
          <div className="inline-block">
            <a
              className="flex items-center font-bold gap-2"
              href={options.href}
            >
              <span>{options.children}</span> <LinkIcon />
            </a>
          </div>
        );
      },
      li: (options) => {
        return (
          <>
            {Array.isArray(options.children)
              ? (
                <li
                  className={clsx(
                    "mt-2",
                    options.children.filter((c) => typeof c !== "string")
                        .length >
                        1
                      ? "[&>p]:inline-block"
                      : "[&>p]:inline",
                  )}
                >
                  {options.children}
                </li>
              )
              : <li>{options.children}</li>}
          </>
        );
      },
    }}
  >
    {content}
  </ReactMarkdown>
);

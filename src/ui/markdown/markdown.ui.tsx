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
          <a
            className="font-medium text-sex-blue-6"
            href={options.href}
          >
            {options.children} <LinkIcon className="inline-block" />
          </a>
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
      img: (options) => {
        return (
          <div className="relative w-full xl:w-1/3 xl:mx-auto my-4">
            <img
              src={options.src}
              alt={options.alt}
              className="object-cover w-full h-full"
            />
          </div>
        );
      },
      p: (options) => <p className="mb-1">{options.children}</p>,
    }}
  >
    {content}
  </ReactMarkdown>
);

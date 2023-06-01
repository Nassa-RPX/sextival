// import { PropsWithChildren } from "react";
import { LinkIcon } from "@sextival/components/icon";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
}

export const Markdown = ({ content }: Props) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      h3: (options) => {
        return <h3 className="text-2xl">{options.children}</h3>;
      },
      ul: (options) => {
        return (
          <ul className="list-disc list-inside ml-2">{options.children}</ul>
        );
      },
      a: (options) => {
        return (
          <a className="flex items-center font-bold gap-2" href={options.href}>
            <span>Clicca qui</span> <LinkIcon />
          </a>
        );
      },
    }}
  >
    {content}
  </ReactMarkdown>
);

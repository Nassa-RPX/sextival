// import { PropsWithChildren } from "react";
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
    }}
  >
    {content}
  </ReactMarkdown>
);

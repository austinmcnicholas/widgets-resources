import { ReactElement, createElement, ReactNode, Fragment } from "react";
// import { unified } from "unified";
// import rehypeParse from "rehype-parse";
// import rehypeSanitize from "rehype-sanitize";
// import rehypeStringify from "rehype-stringify";

import { UnsafeHTMLRenderer } from "./components/UnsafeHTMLRenderer";

import { HTMLNodeContainerProps } from "../typings/HTMLNodeProps";

import "./ui/HTMLNode.css";
import classNames from "classnames";

// async function sanitizeHTML(unsafeHTML: string) {
//     const result = await unified()
//         .use(rehypeParse, { fragment: true })
//         .use(rehypeSanitize)
//         .use(rehypeStringify)
//         .process(unsafeHTML);
//
//     console.log(String(result));
//
//     return String(result);
// }

export function HTMLNode(props: HTMLNodeContainerProps): ReactElement {
    // const [htmlText, setHtmlText] = useState("");

    if (props.renderMode === "tag") {
        return <HTMLNodeTag {...props} />;
    } else {
        return <HTMLNodePlain {...props} />;
    }
    //
    // useEffect(() => {
    //     if (props.unsafeHTML.status === "available") {
    //         sanitizeHTML(props.unsafeHTML.value).then(sanitizedHTML => {
    //             setHtmlText(sanitizedHTML);
    //         });
    //     }
    // }, [props.unsafeHTML]);
    //
    // return (
    //     <UnsafeHTMLRenderer
    //         className={classNames("widget-html-node", props.class)}
    //         style={props.style}
    //         unsafeHTML={htmlText}
    //     />
    // );
}

function HTMLNodeTag(props: HTMLNodeContainerProps): ReactElement | null {
    if (props.tagUseRepeat) {
        const items = props.tagContentRepeatDataSource?.items;
        if (!items?.length) {
            return null;
        }

        // iterate over items
        return (
            <Fragment>
                {items.map(i => {
                    return (
                        <HTMLTagWidget
                            key={i.id}
                            attributes={{
                                // TODO: read attributes from props
                                "data-test": "testMe"
                            }}
                            tagName={props.tagName}
                        >
                            {props.tagContentMode === "text"
                                ? props.tagContentRepeatText?.get(i) ?? ""
                                : props.tagContentRepeatContainer?.get(i)}
                        </HTMLTagWidget>
                    );
                })}
            </Fragment>
        );
    } else {
        return (
            <HTMLTagWidget
                attributes={{
                    // TODO: read attributes from props
                    "data-test": "testMe"
                }}
                tagName={props.tagName}
            >
                {props.tagContentMode === "text" ? props.tagContentText?.value ?? "" : props.tagContentContainer}
            </HTMLTagWidget>
        );
    }
}

function HTMLNodePlain(props: HTMLNodeContainerProps): ReactElement {
    if (props.plainUseExternalFile) {
        return <div>This should render content from {props.plainExternalFilePath?.value ?? "<not set>"} file</div>;
    }

    return (
        <UnsafeHTMLRenderer
            className={classNames("widget-html-node", props.class)}
            style={props.style}
            unsafeHTML={props.plainContent?.value ?? ""}
        />
    );
}

interface HTMLTagWidgetProps {
    tagName: string;
    children: ReactNode;
    attributes: Record<string, any>;
}

export function HTMLTagWidget(props: HTMLTagWidgetProps) {
    const Tag = `${props.tagName}` as keyof JSX.IntrinsicElements;

    return <Tag>{props.children}</Tag>;
}

// tag mode component
// external file component
// inline render component

"use client";

import { useEditor } from "@tiptap/react";
import { extensions } from "./extensions";
import { MenuBar } from "./components/MenuBar";
import { Content } from "./components/EditorContent";
import Preview from "./Preview";

export const RichTextEditor = () => {
    const editor = useEditor({
        extensions,
        immediatelyRender: false,
        content: "<p>Start typing...</p>",
        editorProps: {
            attributes: {
                class: "min-h-[200px]",
            },
        },
    });

    return (
        <div>
            <div className="mx-auto my-8 max-w-4xl">
                <MenuBar editor={editor} />
                <Content editor={editor} />
            </div>
            <div>
                <Preview content={editor?.getHTML() || ""} />
            </div>
        </div>
    );
};

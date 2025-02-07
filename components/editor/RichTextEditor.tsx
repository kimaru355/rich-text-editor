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
        content: "",
        editorProps: {
            attributes: {
                class: "min-h-[200px] outline outline-1 outline-gray-400 focus:outline-gray-400 p-2",
                placeholder: "Start typing...",
            },
        },
    });

    return (
        <div className="flex lg:flex-row flex-col gap-4">
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

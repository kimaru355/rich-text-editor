import Color from "@tiptap/extension-color";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { StarterKit } from "@tiptap/starter-kit";

export const extensions = [
    StarterKit.configure({
        heading: {
            levels: [1, 2, 3],
            HTMLAttributes: (attributes: { level: 1 | 2 | 3 | 4 | 5 }) => {
                const level = attributes.level;
                switch (level) {
                    case 1:
                        return { class: "text-2xl lg:text-4xl font-bold" };
                    case 2:
                        return { class: "text-xl lg:text-3xl font-bold" };
                    case 3:
                        return { class: "text-lg lg:text-2xl font-semibold" };
                    default:
                        return {};
                }
            },
        },
        bulletList: {
            HTMLAttributes: {
                class: "list-disc pl-4",
            },
        },
        orderedList: {
            HTMLAttributes: {
                class: "list-decimal pl-4",
            },
        },
    }),
    Underline,
    TextStyle,
    Color,
    TextAlign.configure({
        types: ["heading", "paragraph"],
    }),
];

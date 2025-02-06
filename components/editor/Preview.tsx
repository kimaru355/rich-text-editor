export default function Preview({ content }: { content: string }) {
    return (
        <div>
            <h1 className="font-bold text-2xl lg:text-4xl">Live Preview</h1>
            <div
                className="max-w-full prose"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}

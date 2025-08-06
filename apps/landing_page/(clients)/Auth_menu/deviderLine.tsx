interface IDL {
    title: string
}

export default function DeviderLine (props: IDL) {
    return (
        <div className="relative mt-5">
            <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">{props.title}</span>
            </div>
        </div>
    )
}
interface ILS {
    onClick: ()=>void,
    text: string,
    buttonTitle: string
}

export default function LinkSection (props: ILS) {
    return (
        <p className="mt-6 text-center text-sm text-gray-600">
            {props.text}{' '}
            <button
                onClick={props.onClick}
                className="text-purple-600 hover:text-purple-500 font-medium transition-colors"
            >
                {props.buttonTitle}
            </button>
        </p>
    )
}
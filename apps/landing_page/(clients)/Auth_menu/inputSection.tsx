import { Eye, EyeOff } from 'lucide-react';

interface IIM {
    heading: string,
    icon?: any,
    error: any,
    inputBox: any,
    secure?: boolean,
    secureOnclick?: ()=>void,
    show?: boolean
}

export default function InputMenu (props: IIM) {
    return (
        <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 ">
                {props.heading}
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {props.icon}
                </div>
                {props.inputBox}
                {props.secure ? (
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={props.secureOnclick}
                    >
                        {props.show ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                        ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                        )}
                    </button>
                ) : null}
            </div>
            {props.error && (
                <p className="mt-2 text-sm text-red-600">{props.error}</p>
            )}
        </div>
    )
}
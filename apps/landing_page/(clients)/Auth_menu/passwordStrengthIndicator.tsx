interface IPSI {
    strength: any,
    colorShow: any,
    labelShow: any
}

export default function PasswordStrengthIndicator (props: IPSI) {
    return (
        <div className="mt-3">
            <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                    className={`h-2 rounded-full transition-all duration-300 ${props.colorShow || 'bg-gray-200'}`}
                    style={{ width: `${(props.strength / 5) * 100}%` }}
                />
                </div>
                <span className="text-sm text-gray-600">
                {props.labelShow || 'Very Weak'}
                </span>
            </div>
        </div>
    )
}
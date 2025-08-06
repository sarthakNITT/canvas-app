interface ITACS {
    checked: boolean,
    onChange: (e: any)=>void,
    error: any
}

export default function TermsAndConditionSection (props: ITACS) {
    return (
        <div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={props.checked}
                    onChange={props.onChange}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-700">
                    I agree to the{' '}
                    <button type="button" className="text-purple-600 hover:text-purple-500 font-medium">
                      Terms and Conditions
                    </button>{' '}
                    and{' '}
                    <button type="button" className="text-purple-600 hover:text-purple-500 font-medium">
                      Privacy Policy
                    </button>
                  </label>
                </div>
              </div>
              {props.error && (
                <p className="mt-2 text-sm text-red-600">{props.error}</p>
              )}
            </div>
    )
}
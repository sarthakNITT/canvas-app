type TIIC = "text" | "email" | "password"

interface IIC {
    placeholder: string,
    type: TIIC,
    id: string,
    name: string,
    value: any,
    onChange: any,
    ifError: any,
    icon: boolean
}

export default function InputComponent (props: IIC) {
    const styles = `w-full text-[13px] py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${
        props.ifError ? 'border-red-500' : 'border-gray-300'
      } ${props.icon ? "pl-10 pr-4" : "px-4" }`
      
    return <input className={styles} placeholder={props.placeholder} type={props.type} id={props.id} name={props.name} value={props.value} onChange={props.onChange} />
}
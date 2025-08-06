"use client"
import { type JSX } from "react";

type TVIBC = "primary" | "secondary" | "tertiary" | "Quaternary" | "Auth"
type TSIBC = "small" | "medium" | "large"

interface IBC {
  variant: TVIBC,
  width?: string,
  title: string,
  size: TSIBC,
  preIcon?: any,
  secIcon?: any,
  runFunction?: ()=>void,
  loading?: boolean
}

export default function ButtonComponent(props: IBC): JSX.Element {
  const size:Record<TSIBC, string> = {
    "small": "transition-colors px-4 py-2",
    "medium": "transition-colors px-6 py-3 ",
    "large": "transition-all transform hover:scale-105 font-medium flex items-center px-8 py-4"
  }

  const styles: Record<TVIBC, string> = {
    "primary": `cursor-pointer bg-purple-600 text-white rounded-lg hover:bg-purple-700 ${size[props.size]} ${props.width ? props.width : null}`,
    "secondary": `cursor-pointer border border-gray-300 text-gray-700 ${props.size==="small" ? "px-4 py-2" : "px-8 py-4"} rounded-lg hover:bg-gray-50 transition-colors font-medium`,
    "tertiary": `cursor-pointer bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium`,
    "Quaternary": "cursor-pointer border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium",
    "Auth": "cursor-pointer w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center",
  }
  return <button disabled={props.loading} onClick={props.runFunction} className={styles[props.variant]}>
    {props.loading ? (
      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> 
    )
    : (
      <>
        {props.preIcon} 
        {props.title} 
        {props.secIcon}
      </>
    )}
  </button>
}
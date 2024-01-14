import { ReactElement, ReactNode } from "react"

interface Props {
    Component?: any,
    content?: string,
    fontColor?: string,
    source?: string,
    type?: string
    // any props that come into the component
}


export default function CustomButton({Component, content, fontColor, source, type}: Props){

    return(
        <>
            <Component type="type" href={source} className={`bg-teal-500 text-${fontColor} py-1 px-3 rounded hover:opacity-75`}>{content}</Component>
        </>
    )
}

// Используй для этой компоненты config и сделать будет проще
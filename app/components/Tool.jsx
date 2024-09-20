import Image from "next/image"

export default function Tool(props) {

    return (
        <div className="w-40 h-80 bg-neutral-800 border border-neutral-600 rounded-md">
            <div className="w-20 h-40 bg-neutral-900 rounded">
                <Image src={props.toolLogo} alt={`${props.toolName} logo`} />
            </div>
            <h3>{props.toolName}</h3>
            <p>{props.toolDesc}</p>

        </div>
    )
}
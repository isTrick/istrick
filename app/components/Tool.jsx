import Image from "next/image";

export default function Tool(props) {
  return (
    <div className="flex flex-col w-[320px] h-[230px] bg-neutral-900 border border-neutral-600 rounded-md">
      <div className="flex flex-row  m-[10px]">
        <div className="flex items-center justify-center w-[60px] h-[60px] max-w-[100px] max-h-[100px] bg-neutral-800 rounded-lg border border-neutral-700">
          <Image
            className="rounded-lg border-none p-[2px]"
            src={props.toolLogo}
            alt={`${props.toolName} logo`}
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col justify-center ml-[10px]">
          <h3 className="text-neutral-50 text-xl font-semibold">
            {props.toolName}
          </h3>
          <p className="text-neutral-400">{props.toolType}</p>
        </div>
      </div>
      <div className="flex flex-col m-[10px]">
        <p className="text-neutral-200">{props.toolDesc}</p>
      </div>
      <div className="flex flex-row m-[10px] items-center justify-end gap-[5px]">
        <a className="text-neutral-100 mr-[5px]" href={props.toolWebsite}>
          {props.toolName} website
        </a>
        <a
          className="bg-neutral-100 border border-neutral-600 p-[5px] rounded"
          href=""
        >
          Read my review
        </a>
      </div>
    </div>
  );
}

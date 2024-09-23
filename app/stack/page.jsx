import Tool from "../components/Tool";

export default function Stack() {
  return (
    <div className="flex items-center justify-center flex-col bg-neutral-950 w-screen h-screen">
      <h1 className="text-white mb-3">
        Amazing modern technologies, tools and resources.
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">  
				<Tool
					toolName="Anytype"
					toolDesc="A encrypted second brain. Create notes, tasks, kanban boards, databases and see everything connected in a graph view."
					toolLogo="/anytype.png"
					toolType="Knowledge Management"
				/>
				<Tool
					toolName="Vercel"
					toolDesc="One of the best serverless solution for full-stack apps and static websites, from the creators of Next.js."
					toolLogo="/vercel_favicon.svg"
					toolType="Web Hosting Service"
				/>
				<Tool
					toolName="Bitwarden"
					toolDesc="Free and open-source password manager, excellent to use with any browser and operating system."
					toolLogo="/bitwarden.png"
					toolType="Password manager"
				/>
				<Tool
					toolName="Zorin OS"
					toolDesc="The most polished Linux distribution. It's based on ubuntu and excellent for new Linux users coming from Windows or MacOS."
					toolLogo="/zorin.png"
					toolType="Linux Distribution"
				/>
				<Tool
					toolName="Zen Browser"
					toolDesc="A fresh open-source Firefox-based web browser focused on modern features and enhanced privacy."
					toolLogo="/zen.svg"
					toolType="Web Browser"
				/>
				<Tool
					toolName="Zed Editor"
					toolDesc="The editor for what's next. Simple, powerful, and very fast. It's like VSCode and Neovim combined, with AI integration."
					toolLogo="/zed.webp"
					toolType="Code Editor"
      	/>
			</div>	
    </div>
  );
}

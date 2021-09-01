import React from "react";

export default function Drawer({ children, isOpen, setIsOpen }) {
	return (
		<main
			className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out
				${isOpen ? " transition-opacity opacity-100 duration-500 translate-x-0  " : " transition-all delay-500 opacity-0 translate-x-full  "}`}
		>
			<section
				className={`w-6/12 max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform ${
					isOpen ? " translate-x-0 " : " translate-x-full "
				}`}
			>
				<button className={"text-gray-900"} onClick={() => setIsOpen(false)}>
					Close
				</button>
				<article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
					<header className="p-4 font-bold text-lg">Header</header>
					{children}
				</article>
			</section>
			<section className=" w-screen h-full cursor-pointer " onClick={() => setIsOpen(false)}></section>
		</main>
	);
}

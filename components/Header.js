import Link from "next/link";
import { Menu } from "react-feather";
const Header = () => {
	const styles = {
		container:
			"sticky top-0 z-50 flex bg-white px-4 md:px-32 items-center justify-between shadow text-black h-16",
		logo: "transition font-bold text-base md:text-lg xl:text-xl text-blue-700 cursor-pointer hover:scale-105 active:scale-100",
		center: "flex space-x-2 sm:space-x-4 md:space-x-8 h-max justify-center",
		centerButton:
			"hidden md:inline-flex transition hover:bg-gray-200 cursor-pointer py-2 my-4 font-bold md:text-base px-1 md:px-4 rounded-xl active:bg-gray-300 text-gray-600 ",
		endButton:
			"hidden md:inline-flex gtransition text-white font-bold bg-blue-700 py-3 px-4 rounded-full cousor-pounter hover:bg-blue-500 active:bg-blue-700 cursor-pointer text-xs md:text-sm xl:text-base",
		menu: "md:hidden transition border p-1 rounded-lg border-gray-700 hover:scale-105 cursor-pointer active:scale-100",
	};

	return (
		<header className={styles.container}>
			<Link href="/">
				<h1 className={styles.logo}>내일은 최상단</h1>
			</Link>
			<section className={styles.center}>
				<div className={styles.centerButton}>프로젝트</div>
				<div className={styles.centerButton}>가격안내</div>
				<div className={styles.centerButton}>상담하기</div>
			</section>
			<div className={styles.menu}>
				<Menu strokeWidth={1} />
			</div>
			<div className={styles.endButton}>최상단 시작하기</div>
		</header>
	);
};

export default Header;

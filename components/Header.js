const Header = () => {
	const styles = {
		container:
			"sticky top-0 z-50 flex bg-white px-4 md:px-8 items-center justify-between shadow-md text-black",
		logo: "transition font-bold text-base md:text-lg xl:text-xl text-blue-700 cursor-pointer hover:scale-105 active:scale-100",
		center: "flex space-x-2 sm:space-x-12 md:space-x-14 h-max justify-center",
		centerButton:
			"transition hover:bg-gray-200 cursor-pointer py-2 my-4 font-bold text-xs md:text-base xl:text-lg px-1 md:px-4 rounded-xl active:bg-gray-300",
		endButton:
			"transition text-white font-bold bg-blue-700 py-3 px-4 rounded-xl cousor-pounter hover:bg-blue-500 active:bg-blue-700 cursor-pointer text-xs md:text-sm xl:text-base",
	};

	return (
		<header className={styles.container}>
			<h1 className={styles.logo}>내일은 최상단</h1>
			<section className={styles.center}>
				<div className={styles.centerButton}>프로젝트</div>
				<div className={styles.centerButton}>가격안내</div>
				<div className={styles.centerButton}>상담하기</div>
			</section>
			<div className={styles.endButton}>시작하기</div>
		</header>
	);
};

export default Header;

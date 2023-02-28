import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import styles from "./footer.module.css";
export default function Footer() {
	return (
		<footer className={styles.footerWrapper}>
			<div className={styles.footer}>
				<div className={styles.footerLeft}>
					<div className={styles.info}>
						<h2>O A S I S</h2>
						<p>Read, Learn, Achieve</p>
					</div>
					<div className={styles.social}>
						<h2>Follow Us</h2>
						<div className={styles.icons}>
							<div>
								<FaInstagram />
							</div>
							<div>
								<FaFacebook />
							</div>
							<div>
								<FaTwitter />
							</div>
							<div>
								<FaLinkedin />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.footerRight}>
					<div className={styles.contact}>
						<h2>Contact Us</h2>
						<Link
							className={styles.mail}
							href="mailto:ecell@hyderabad.bits-pilani.ac.in"
						>
							oasis@hyderabad.bits-pilani.ac.in
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.copyright}>
				Copyright 2023 All rights reserved. Designed by OASIS Inc.
			</div>
		</footer>
	);
}

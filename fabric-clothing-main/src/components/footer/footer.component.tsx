import { useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../logo/logo.component";
import {
	Divider,
	FooterWrapper,
	IconContainer,
	IconWrapper,
	List,
	LogoWrapper,
} from "./footer.styles";

const Footer = () => {
	// Scroll to top on render (mobile fix)
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<FooterWrapper>
			<LogoWrapper>
				<div className="logo-inner">
					<Logo />
				</div>
				<IconContainer>
					<p>© 2025 Fabric Clothing, Inc.</p>
					<IconWrapper>
						<a
							href="https://github.com/dashboard"
							target="_blank"
							rel="noreferrer noopener"
							aria-label="Github link"
						>
							<img
								src="https://ik.imagekit.io/fabric01/svg-icons/github.svg"
								alt="Github"
							/>
						</a>
						<Divider>|</Divider>
						<a
							href="https://react.dev/learn"
							target="_blank"
							rel="noreferrer noopener"
							aria-label="React Docs"
						>
							<img
								src="https://ik.imagekit.io/fabric01/svg-icons/react.svg"
								alt="React"
							/>
						</a>
					</IconWrapper>
				</IconContainer>
			</LogoWrapper>

			<List>
				<li>Resources</li>
				<li><Link to="/policy">Docs</Link></li>
				<li><Link to="/policy">Learn</Link></li>
				<li><Link to="/policy">Previews</Link></li>
			</List>

			<List>
				<li>Explore</li>
				<li><Link to="/policy">Commerce</Link></li>
				<li><Link to="/policy">Github</Link></li>
				<li><Link to="/policy">Releases</Link></li>
				<li><Link to="/policy">Contact Sales</Link></li>
			</List>

			<List>
				<li>Legal</li>
				<li><Link to="/policy">Privacy Policy</Link></li>
				<li><Link to="/policy">Cookie Preferences</Link></li>
			</List>
		</FooterWrapper>
	);
};

export default Footer;

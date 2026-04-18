import styled from "styled-components";

export const FooterWrapper = styled.footer`
	margin: 6em 0 0 0;
	height: 100%;
	padding-bottom: 4em;
	background-color: #ececec;
	border-top: 1px black solid;
	display: grid;
	font-family: sans-serif;
	grid-template-columns: repeat(4, 1fr);

	@media (min-width: 1980px) and (max-width: 3840px) {
		font-size: 2rem;
		width: 100%;
		margin-top: auto;
	}

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;

export const LogoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 0;
	margin: 2em 0 0 2em;

	svg, img {
		display: block;
		margin: 0;
		padding: 0;
		max-width: 100%;
		height: auto;
	}

	@media (min-width: 1980px) and (max-width: 3840px) {
		margin-top: 5em;
	}

	@media (max-width: 768px) {
		margin-top: 2em;
		margin-left: 1em;
	}
`;

export const List = styled.ul`
	list-style: none;
	align-self: start;
	justify-self: start;
	margin-top: 2em;
	font-size: 0.9rem;
	line-height: 1.25rem;

	li:nth-child(1) {
		font-weight: bold;
		font-size: 1rem;
		margin-bottom: 0.5em;
	}

	@media (min-width: 1980px) and (max-width: 3840px) {
		font-size: 2rem;
		margin-top: 4em;

		li:nth-child(1) {
			font-weight: bold;
			font-size: 3rem;
			margin-bottom: 1em;
		}

		li {
			margin-bottom: 1em;
		}
	}
`;

export const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5em;
	margin-top: 1.5em;

	p {
		margin: 0;
		font-size: 0.875rem;
		text-align: center;
	}

	@media (min-width: 1980px) and (max-width: 3840px) {
		p {
			font-size: 2rem;
			line-height: 2.5rem;
		}
	}
`;

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1em;
	margin: 0;
	padding: 0;

	a {
		padding: 0;
		margin: 0;

		img {
			width: 1.5em;
			height: 1.5em;
			display: block;
		}
	}
`;

export const Divider = styled.span`
	font-size: 1.2em;
	color: #444;
`;

export const SubscribeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-left: 40px;
	margin-top: 2em;

	p {
		font-size: 0.9rem;
		line-height: 1.25rem;
		margin: 0 0 0.5em 0;
	}

	@media (min-width: 1980px) and (max-width: 3840px) {
		p {
			font-size: 2rem;
			line-height: 2.5rem;
		}
	}

	@media (max-width: 768px) {
		margin-top: 0;
	}
`;

export const SubscribeTitle = styled.b`
	margin: 2em 0 1em 0;
	font-weight: bold;
	font-size: 1rem;

	@media (min-width: 1980px) and (max-width: 3840px) {
		font-size: 3rem;
	}
`;

import React, { FC } from 'react';

type CartCheckBagProps = {
	width?: number;
	height?: number;
	className?: string;
};

const CartCheckBag: FC<CartCheckBagProps> = ({ width, height, className }) => {
	return (
		<svg
			width={width}
			height={height}
			className={className}
			viewBox="0 0 12.686 16"
		>
			<g transform="translate(-27.023 -2)">
				<g transform="translate(27.023 5.156)">
					<g>
						<path
							d="M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z"
							transform="translate(-53.023 -101.005)"
							fill="currentColor"
						></path>
					</g>
				</g>
				<g transform="translate(30.274 2)">
					<g>
						<path
							d="M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z"
							transform="translate(-157.039)"
							fill="currentColor"
						></path>
					</g>
				</g>
			</g>
		</svg>
	);
};

// const CartCheckBag: FC<CartCheckBagProps> = ({ width, height, className }) => {
// 	return (
// 		<svg
// 			width={width}
// 			height={height}
// 			className={className}
// 			viewBox="0 0 12.686 16"
// 		>
// 			<g transform="translate(-27.023 -2)">
// 				<path xmlns="http://www.w3.org/2000/svg" d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6   c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3   C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z    M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1   c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z" />
// 			</g>
// 		</svg>
// 	);
// };

export default CartCheckBag;

import './input.css';

export const Input = ({
	field,
	label,
	value,
	onChangeHandler,
	type,
	showErrorMessage,
	validationMessage,
	onBlurHandler,
	textarea
}) => {
	const handleValueChange = (event) => {
		onChangeHandler(event.target.value, field);
	};
	const handleInputBlur = (event) => {
		onBlurHandler(event.target.value, field);
	};

	return (
		<div className='input'>
			<div className="lbl">
				<span>{label}</span>
			</div>
			<div>
				{textarea ? (
					<textarea
						type={type}
						value={value}
						onChange={handleValueChange}
						onBlur={handleInputBlur}
						rows={5}
						style={{ maxWidth: "400px" }}
					/>
				) : (
					<input
						type={type}
						value={value}
						onChange={handleValueChange}
						onBlur={handleInputBlur}
					/>
				)}
                <span className="alert">
                    {showErrorMessage && validationMessage}
                </span>
			</div>
		</div>
	);
};

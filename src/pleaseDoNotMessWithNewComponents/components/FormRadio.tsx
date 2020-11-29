import React, { FC, InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export type radioListType = { label: string; value: string };

export interface RadioAndCheckProps
	extends InputHTMLAttributes<HTMLInputElement> {
	groupLabel: string;
	groupName: string;
	radioList: Array<radioListType>;
	showVisibilityTag?: boolean;
	stateSetter?: (item: string) => void;
}

interface RadioContainerProps {
	width?: string;
	height?: string;
}

interface RadioItemProps {
	color?: string;
}

export const FormRadioItem = styled.div<RadioItemProps>`
	display: flex;
	position: relative;

	input[type='radio'],
	input[type='checkbox'] {
		display: none;
	}

	label {
		font-weight: normal;

		&::before {
			content: ' ';
			display: inline-block;
			position: relative;
			top: 5px;
			margin: 0 5px 0 0;

			width: 18px;
			height: 18px;
			border-radius: 50%;
			border: 2px solid ${(props) => (props.color ? props.color : 'black')};
			background-color: transparent;
		}
	}

	& input[type='radio']:checked + label:after {
		content: ' ';
		width: 14px;
		height: 14px;
		border-radius: 50%;
		position: absolute;
		top: 9px;
		left: 4px;
		display: block;
		background: ${(props) => (props.color ? props.color : 'black')};
	}
	& input[type='radio']:checked + label {
		font-weight: bold;
		color: ${(props) => (props.color ? props.color : 'black')};
	}
`;

export const RadioAndCheckContainer = styled.div<RadioContainerProps>`
	width: ${(props) => (props.width ? props.width : 'fit-content')};
	height: ${(props) => (props.height ? props.height : '60px')};
	padding: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	border-radius: 5px;
	font-size: 12px;

	label {
		text-align: left;
	}

	input[type='radio'] {
		margin-right: 5px;
	}

	.key {
		display: flex;
		justify-content: space-between;
		align-items: center;

		/* .status-visibility {
			background: red;
			border-radius: 5px;
			padding: 2px 5px;
			display: flex;
		} */
	}

	.value {
		display: flex;
		gap: 10px;
	}
`;

const FormRadio: FC<RadioAndCheckProps> = ({
	groupLabel,
	groupName,
	radioList,
	showVisibilityTag,
	stateSetter,
	color,
	...rest
}) => {
	let render = radioList.map((item: radioListType, index) => (
		<FormRadioItem color={color} key={index}>
			<input
				type='radio'
				name={groupName}
				id={item.label}
				value={item.value}
				{...rest}
			/>
			<label htmlFor={item.label}>{item.label}</label>
		</FormRadioItem>
	));
	return (
		<RadioAndCheckContainer>
			<div className='key'>
				<label htmlFor={groupName}>{groupLabel}</label>
				{showVisibilityTag && (
					<div className='status-visibility'>
						<input
							type='radio'
							name='status-visibility'
							id='status-visibility'
							value='all'
						/>
						<label htmlFor='status-visibility'>All</label>
					</div>
				)}
			</div>
			<div className='value'>{render}</div>
		</RadioAndCheckContainer>
	);
};

export default FormRadio;

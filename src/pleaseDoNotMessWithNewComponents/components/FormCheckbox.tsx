import React, { FC } from 'react';
import {
	RadioAndCheckContainer,
	RadioAndCheckProps,
	FormRadioItem,
	radioListType,
} from './FormRadio';

const FormCheckbox: FC<RadioAndCheckProps> = ({
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
				type='checkbox'
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

export default FormCheckbox;

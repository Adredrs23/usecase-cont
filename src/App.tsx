import React, { FC, useState } from 'react';
import './App.css';
import FormContainer from './components/FormContainer';
import FormInput from './components/FormInput';

import { FormInputPropsType } from './interfaces/FormInputInterface';
import FormCheckbox from './pleaseDoNotMessWithNewComponents/components/FormCheckbox';
import FormRadio from './pleaseDoNotMessWithNewComponents/components/FormRadio';
import SearchComponent from './pleaseDoNotMessWithNewComponents/components/SearchComponent';

const App: FC = () => {
	const [clientName, setClientName] = useState<string>('Jack Chem');
	const [organizationId, setOrganizationId] = useState<string>('AO1231');
	const [tradingMarket, setTradingMarket] = useState<string>('HK');
	const [crossEngineEnabled, setCrossEngineEnabled] = useState('Y');
	const [status, setStatus] = useState('Active');

	const arrayData: Array<FormInputPropsType> = [
		{
			label: 'Client Name',
			name: 'clientName',
			// readOnly: true,
			type: 'text',
			stateValue: clientName,
			stateSetter: (item) => setClientName(item),
		},
		{
			label: 'Organization Id',
			name: 'organizationId',
			readOnly: true,
			type: 'text',
			stateValue: organizationId,
			stateSetter: (item) => setOrganizationId(item),
		},
		{
			label: 'Trading Market',
			name: 'tradingMarket',
			readOnly: true,
			type: 'text',
			stateValue: tradingMarket,
			stateSetter: (item) => setTradingMarket(item),
		},
		{
			label: 'Cross Engine Enabled',
			name: 'crossEngineEnabled',
			readOnly: true,
			type: 'text',
			stateValue: crossEngineEnabled,
			stateSetter: (item) => setCrossEngineEnabled(item),
		},
		{
			label: 'Status',
			name: 'status',
			readOnly: true,
			type: 'text',
			stateValue: status,
			stateSetter: (item) => setStatus(item),
		},
	];

	let data = arrayData.map((data) => <FormInput {...data} />);
	return (
		<div className='App'>
			<FormContainer>{data}</FormContainer>
			{/* <SearchComponent></SearchComponent> */}
			<FormRadio
				groupLabel='Status'
				groupName='status'
				// showVisibilityTag
				color='red'
				radioList={[
					{ label: 'Active', value: 'active' },
					{ label: 'Inactive', value: 'inactive' },
				]}
			/>

			<FormCheckbox
				groupLabel='Status'
				groupName='status'
				// showVisibilityTag
				color='red'
				radioList={[
					{ label: 'Active', value: 'active' },
					{ label: 'Inactive', value: 'inactive' },
				]}
			/>
		</div>
	);
};

export default App;

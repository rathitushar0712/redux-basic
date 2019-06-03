import React from 'react';
import PropTypes from 'prop-types';

import './table.css';

const Table = ({ data }) => {
	return (
		<table border="1" align="left">
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>City</th>
					<th>Company</th>
				</tr>
			</thead>
			{data.map((d, i) => {
				return (
					<tbody key={i}>
						<tr>
							<td>{d.name}</td>
							<td>{d.email}</td>
							<td>{d.address.city}</td>
							<td>{d.company.name}</td>
						</tr>
					</tbody>
				);
			})}
		</table>
	);
};

Table.propTypes = {
	data: PropTypes.array
};

export default Table;

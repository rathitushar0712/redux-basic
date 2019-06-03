import axios from 'axios';

export default function fetchData() {
	return dispatch => {
		return {
			getData: () =>
				axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
					dispatch({ type: 'FETCH_DATA', payload: res.data });
				})
		};
	};
}

const initialState = {
	data: []
};

const reducer = (state = initialState, action) => {
	const newState = { ...state };

	if (action.type === 'FETCH_DATA') {
		newState.data = action.payload;
	}

	return newState;
};

export default reducer;

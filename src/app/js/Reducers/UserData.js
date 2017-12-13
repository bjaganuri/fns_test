const UserDataInState = {
	name: "",
	age: ""
}


export const UserData = (state = UserDataInState , action) => {
	/*switch (action.type)
	{
	case "@@router/LOCATION_CHANGE":
		state = {
			...state,
			name: "",
			age: ""
		}
		break;
	}*/
	const newState = {
		...state
	};

	return newState;
}
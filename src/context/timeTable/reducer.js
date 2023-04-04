// for useReducer parameters
export const initialState = {
    user: null,
    currRoute: 'home',
    reqContent: '',
    userData: [],
    query: {
        search: "",
        page: 1,
        sort: "",
        testingServices: '',
        productCategories: '',
        standards: '',
        neighborhoods: '',
        regions: ''
    },
    authMsg: '',
}


const reducer = (state, action) => {
    console.log("reducer", action);
    switch (action.type) {

        case 'SET_CURR_ROUTE':
            return {
                ...state,
                currRoute: action.payload,
            }
        case 'SET_REQ_CONTENT':
            return {
                ...state,
                reqContent: action.payload,
            }
        case 'SET_AUTH_MSG':
            return {
                ...state,
                authMsg: action.payload,
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            }
        case 'SET_LAB_DATA':
            return {
                ...state,
                labData: action.payload,
            }
        case 'SET_USER_DATA':
            return {
                ...state,
                userData: action.payload,
            }
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                query: {
                    ...state.query,
                    search: action.payload,
                    page: 1,
                },
            }
        case 'SET_PAGE_QUERY':
            return {
                ...state,
                query: {
                    ...state.query,
                    page: action.payload,
                },
            }
        case 'SET_REGIONS_QUERY':
            return {
                ...state,
                query: {
                    ...state.query,
                    regions: action.payload,
                },
            }
        case 'SET_STANDARDS_QUERY':
            return {
                ...state,
                query: {
                    ...state.query,
                    standards: action.payload,
                },
            }
        case 'SET_TESTING_SERVICES_QUERY':
            return {
                ...state,
                query: {
                    ...state.query,
                    testingServices: action.payload,
                },
            }

        default:
            return state;
    }
}

export default reducer;
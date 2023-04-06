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
    myForms: [],
    todayTable: [],
    timeTable: {},
    timeTable1: {
        mon: [
            {
                startTime: '09:20',
                endTime: '10:10',
                subject: 'HM251',
            },
            {
                startTime: '10:10',
                endTime: '11:00',
                subject: 'CS201',
            },
            {
                startTime: '11:20',
                endTime: '12:10',
                subject: 'MA251',
            },
            {
                startTime: '12:10',
                endTime: '13:00',
                subject: 'No Class',
            },
            {
                startTime: '14:00',
                endTime: '14:50',
                subject: 'CS254',
            },
            {
                startTime: '14:50',
                endTime: '15:40',
                subject: 'No Class',
            },
            {
                startTime: '16:00',
                endTime: '16:50',
                subject: 'No Class',
            },
        ],
        tue: [
            {
                startTime: '09:20',
                endTime: '10:10',
                subject: 'CS253',
            },
            {
                startTime: '10:10',
                endTime: '11:00',
                subject: 'MA251',
            },
            {
                startTime: '11:20',
                endTime: '12:10',
                subject: 'CS251',
            },
            {
                startTime: '12:10',
                endTime: '13:00',
                subject: 'No Class',
            },
            {
                startTime: '14:00',
                endTime: '14:50',
                subject: 'HM251',
            },
            {
                startTime: '14:50',
                endTime: '15:40',
                subject: 'No Class',
            },
            {
                startTime: '16:00',
                endTime: '16:50',
                subject: 'No Class',
            },
        ],
        wed: [
            {
                startTime: '09:20',
                endTime: '10:10',
                subject: 'MA251',
            },
            {
                startTime: '10:10',
                endTime: '11:00',
                subject: 'CS251',
            },
            {
                startTime: '11:20',
                endTime: '12:10',
                subject: 'CS252',
            },
            {
                startTime: '12:10',
                endTime: '13:00',
                subject: 'No Class',
            },
            {
                startTime: '14:10',
                endTime: '14:50',
                subject: 'HM251',
            },
            {
                startTime: '14:50',
                endTime: '15:40',
                subject: 'CS254',
            },
            {
                startTime: '16:00',
                endTime: '16:50',
                subject: 'No Class',
            },
        ],
        thu: [
            {
                startTime: '09:20',
                endTime: '10:10',
                subject: 'CS253',
            },
            {
                startTime: '10:10',
                endTime: '11:00',
                subject: 'MA251',
            },
            {
                startTime: '11:20',
                endTime: '12:10',
                subject: 'CS251',
            },
            {
                startTime: '12:10',
                endTime: '13:00',
                subject: 'CS252',
            },
            {
                startTime: '14:00',
                endTime: '16:50',
                subject: 'CS255',
            },
        ],
        fri: [
            {
                startTime: '10:10',
                endTime: '11:00',
                subject: 'CS254',
            },
            {
                startTime: '12:10',
                endTime: '13:00',
                subject: 'CS253',
            },
            {
                startTime: '14:00',
                endTime: '16:50',
                subject: 'CS256',
            },
        ],
    }
}


const reducer = (state, action) => {
    console.log("reducer", action);
    switch (action.type) {

        case 'SET_MY_FORMS':
            return {
                ...state,
                myForms: action.payload,
            }
        case 'SET_CURR_ROUTE':
            return {
                ...state,
                currRoute: action.payload,
            }
        case 'SET_TIME_TABLE':
            return {
                ...state,
                timeTable: action.payload,
            }
        case 'SET_TODAY_TABLE':
            return {
                ...state,
                todayTable: action.payload,
            }
        case 'UPDATE_MON_TIME_TABLE':
            return {
                ...state,
                timeTable: {
                    ...state.timeTable,
                    mon: action.payload,
                },
            }
        case 'UPDATE_TUE_TIME_TABLE':
            return {
                ...state,
                timeTable: {
                    ...state.timeTable,
                    tue: action.payload,
                },
            }
        case 'UPDATE_WED_TIME_TABLE':
            return {
                ...state,
                timeTable: {
                    ...state.timeTable,
                    wed: action.payload,
                },
            }
        case 'UPDATE_THU_TIME_TABLE':
            return {
                ...state,
                timeTable: {
                    ...state.timeTable,
                    thu: action.payload,
                },
            }
        case 'UPDATE_FRI_TIME_TABLE':
            return {
                ...state,
                timeTable: {
                    ...state.timeTable,
                    fri: action.payload,
                },
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
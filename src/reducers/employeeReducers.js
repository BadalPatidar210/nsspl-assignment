const {
  LIST_EMPLOYEE_SUCCESS,
  LIST_EMPLOYEE_REQUEST,
  LIST_EMPLOYEE_FAIL,
} = require("../constants/employeeConstants");

function employeeListReducer(state, action) {
  switch (action.type) {
    case LIST_EMPLOYEE_REQUEST:
      return { ...state, loading: true };
    case LIST_EMPLOYEE_SUCCESS:
      return { ...state, loading: false, listEmployee: action.payload };
    case LIST_EMPLOYEE_FAIL:
      return { ...state, loading: false, error: action.payload };
  }
}
export { employeeListReducer };

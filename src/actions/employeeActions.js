const {
  LIST_EMPLOYEE_REQUEST,
  LIST_EMPLOYEE_FAIL,
  LIST_EMPLOYEE_SUCCESS,
} = require("../constants/employeeConstants");
const axios = require("axios");
const getList = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_EMPLOYEE_REQUEST });
    const { data } = await axios.get("https://api.github.com/users");
    dispatch({ type: LIST_EMPLOYEE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LIST_EMPLOYEE_FAIL, payload: error.message });
  }
};
export { getList };

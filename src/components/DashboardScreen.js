import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../actions/employeeActions";
function DashboardScreen() {
  const listEmployee = useSelector((state) => state.listEmployee);
  const { list, loading, error } = listEmployee;
  const dispatch = useDispatch();

  useEffect(() => {
    if (list.length === 0) dispatch(getList());
    return () => {};
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : list ? (
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Login Name</td>
              <td>URL</td>
              <td>NODE-ID</td>
              <td>SITE-ADMIN</td>
            </tr>
          </thead>
          <tbody>
            {list.map((elem, index) => (
              <tr kay={index}>
                <td>{elem.id}</td>
                <td>{elem.login}</td>
                <td>{elem.url}</td>
                <td>{elem.node_id}</td>
                <td>{elem.site_admin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
}

export default DashboardScreen;

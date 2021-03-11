import React, {useState} from 'react';
import {UserContext} from './context';

export const UserProvider = (props) => {
  const initUser = {
    mssv: '',
    name: '',
    major: '',
    faculty: '',
    class: '',
    birth: '',
  };

  const [userData, setuserData] = useState(initUser);

  const logout = () => {
    setuserData((oldStates) => ({...oldStates, ...initUser}));
  };

  const store = {
    data: userData,
    setData: (input) => {
      setuserData((oldStates) => ({...oldStates, ...input}));
    },
    logout: () => logout(),
  };

  return (
    <UserContext.Provider value={store}>{props.childen}</UserContext.Provider>
  );
};

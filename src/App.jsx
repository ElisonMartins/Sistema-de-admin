import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit } from "./users/UserEdit.jsx";
import { UserCreate } from "./users/Usercreate.jsx";

import authProvider from './users/authProvider.jsx';

import './App.css'
const dataProvider = jsonServerProvider('http://localhost:3000');

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/>
  </Admin>
);

export default App;
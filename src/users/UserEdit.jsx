import * as React from "react";
import { Datagrid, EmailField, List, TextField, DateField, NumberField, ChipField, 
    Create, SimpleForm, TextInput, RadioButtonGroupInput, NumberInput, DateInput, PasswordInput, Edit,
    useRecordContext } from 'react-admin';

import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem } from 'react-admin';
import { Card, CardContent } from '@mui/material';
//Exibir usuarios na tela de Admin

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="Nome" />
            <TextField source="Login" />
            <TextField source="Senha" />
            <EmailField source="email" />
            <NumberField source="telefone" />
            <NumberField source="CPF" />
            <DateField source="Data de Nascimento" />
            <TextField source="Nome da mae" />
            <ChipField source="Status" />
            <DateField source="Data de inclusao" />
            <DateField source="Data de alteraçao" />
        </Datagrid>
    </List>
);

//Criar novo usuario
export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="Nome" />
            <TextInput source="Login" />
            <PasswordInput source="Senha" />
            <TextInput source="email" />
            <NumberInput source="telefone" />
            <NumberInput source="CPF" />
            <DateInput source="Data de Nascimento" />
            <TextInput source="Nome da mae" />
            <RadioButtonGroupInput source="Status" choices={[
                {id: 'ativo', name: 'ativo'},
                {id: 'inativo', name: 'inativo'},
                {id: 'bloqueado', name: 'bloqueado'},
            ]}
            />
        </SimpleForm>
    </Create>
);

//Editar dados dos usuarios
//const UserName = () => {
//    const record = useRecordContext();
//    return <span>Usuario {record ? `"${record.Nome}"` : ''}</span>;
//};
//Nome={<UserName />}    (fica dentro do Edit)

export const UserEdit = () => (
    <Edit >
        <SimpleForm>
            <TextInput source="Nome" />
            <TextInput source="Login" />
            <PasswordInput source="Senha" />
            <TextInput source="email" />
            <NumberInput source="telefone" />
            <NumberInput source="CPF" />
            <DateInput source="Data de Nascimento" />
            <TextInput source="Nome da mae" />
            <RadioButtonGroupInput source="Status" choices={[
                {id: 'ativo', name: 'ativo'},
                {id: 'inativo', name: 'inativo'},
                {id: 'bloqueado', name: 'bloqueado'},
            ]}
            />
        </SimpleForm>
    </Edit>
);
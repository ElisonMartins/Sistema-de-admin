import * as React from "react";
import { Datagrid, EmailField, List, TextField, DateField, NumberField, ChipField, SimpleList, ReferenceField,
    Create, SimpleForm, TextInput, RadioButtonGroupInput, NumberInput, DateInput, PasswordInput, Edit,
    useRecordContext, useTranslate } from 'react-admin';
import { Chip } from '@mui/material';
import { useMediaQuery } from '@mui/material';

//Exibir usuarios na tela de Admin
const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />;
};

const postFilters = [
    <TextInput label="Procurar" source="q" alwaysOn />,
    <ChipField label="Nome" source="Nome" defaultValue="" />,
    <QuickFilter source="Status" label="inativo" defaultValue={'inativo'} />,

];

export const UserList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List title={"Usuarios cadastrados"} filters={postFilters}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => (
                        <TextField source="Nome" />
                    )}
                    tertiaryText={record => (
                        <NumberField source="id" />
                    )}
                />
            ) : (
                <Datagrid>
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
            )}
        </List>
    );
}

//Criar novo usuario
export const UserCreate = props => (
    <Create {...props} title={"Criar novo usuario"}>
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
    <Edit>
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

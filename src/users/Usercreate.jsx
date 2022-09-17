import * as React from "react";
import { Create, SimpleForm, TextInput, RadioButtonGroupInput, NumberInput, DateInput, PasswordInput} from 'react-admin';

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

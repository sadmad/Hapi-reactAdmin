import { List, Datagrid, TextField, EmailField, EditButton } from 'react-admin';
import { Edit, SimpleForm, TextInput, Create } from 'react-admin';

// User List Component
export const UserList = (props: any) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <EditButton />
        </Datagrid>
    </List>
);

// User Edit Component
export const UserEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);

// User Create Component
export const UserCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);

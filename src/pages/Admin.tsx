import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { PostList } from './posts'; // Example resource

const AdminPage: React.FC = () => (
    <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>
        <Resource name="posts" list={PostList} />
        {/* Add more resources as needed */}
    </Admin>
);

export default AdminPage;

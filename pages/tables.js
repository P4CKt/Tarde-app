import React, {useMemo, } from 'react';
import MaterialReactTable from 'material-react-table';
import { dummyData } from '@/components/dummy-data';

function tables() {
    const data3 = [dummyData.filter((item) => item.sehir == "Gaziantep")[0]];
    const data1 = data3[0];
   
    const dataKey = Object.keys(data3[0]);
    const dataObj = Object.values(data1);
    const columnsDash = []; //colums
    const dataIndex = [];
    dataKey.map((item) =>
    columnsDash.push({ item })
    );
    console.log(Object.keys(columnsDash));
    const data = [
        {
          name: {
            firstName: 'John',
            lastName: 'Doe',
          },
          address: '261 Erdman Ford',
          city: 'East Daphne',
          state: 'Kentucky',
        },
        {
          name: {
            firstName: 'Jane',
            lastName: 'Doe',
          },
          address: '769 Dominic Grove',
          city: 'Columbus',
          state: 'Ohio',
        },
        {
          name: {
            firstName: 'Joe',
            lastName: 'Doe',
          },
          address: '566 Brakus Inlet',
          city: 'South Linda',
          state: 'West Virginia',
        },
        {
          name: {
            firstName: 'Kevin',
            lastName: 'Vandy',
          },
          address: '722 Emie Stream',
          city: 'Lincoln',
          state: 'Nebraska',
        },
        {
          name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
          },
          address: '32188 Larkin Turnpike',
          city: 'Charleston',
          state: 'South Carolina',
        },
      ];
    const columns = useMemo(
        () => [
          {
            accessorKey: 'name.firstName', //access nested data with dot notation
            header: 'First Name',
          },
          {
            accessorKey: 'name.lastName',
            header: 'Last Name',
          },
          {
            accessorKey: 'address', //normal accessorKey
            header: 'Address',
          },
          {
            accessorKey: 'city',
            header: 'City',
          },
          {
            accessorKey: 'state',
            header: 'State',
          },
        ],
        [],
      );
    
      return <MaterialReactTable columns={columns} data={data} />;
    };
    



export default tables
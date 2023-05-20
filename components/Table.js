import React from 'react'
import { Grid, Table ,Radio} from "@nextui-org/react";
function PTable() {
 
    const columns = [
        {
          key: "name",
          label: "NAME",
        },
        {
          key: "role",
          label: "ROLE",
        },
        {
          key: "status",
          label: "STATUS",
        },
      ];
      const rows = [
        {
          key: "1",
          name: "Tony Reichert",
          role: "CEO",
          status: "Active",
        },
        {
          key: "2",
          name: "Zoey Lang",
          role: "Technical Lead",
          status: "Paused",
        },
        {
          key: "3",
          name: "Jane Fisher",
          role: "Senior Developer",
          status: "Active",
        },
        {
          key: "4",
          name: "William Howard",
          role: "Community Manager",
          status: "Vacation",
        },
      ];


    
  return (
  <>
    <Table
      bordered
      shadow={false}
      selectionMode="multiple"
      aria-label="Example static bordered collection table"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>NAME</Table.Column>
        <Table.Column>ROLE</Table.Column>
        <Table.Column>STATUS</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Tony Reichert</Table.Cell>
          <Table.Cell>CEO</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Zoey Lang</Table.Cell>
          <Table.Cell>Technical Lead</Table.Cell>
          <Table.Cell>Paused</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Jane Fisher</Table.Cell>
          <Table.Cell>Senior Developer</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>William Howard</Table.Cell>
          <Table.Cell>Community Manager</Table.Cell>
          <Table.Cell>Vacation</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </>
  )
}

export default PTable
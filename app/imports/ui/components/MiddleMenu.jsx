import React from 'react';
import { Menu, Grid, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    const middle = {
      paddingTop: '20px',
    };
    return (
        <Menu style={middle} borderless className="header">
          <Grid container centered={'true'}>
            <Menu.Item position='center'>
              <Dropdown item text="Men">
                <Dropdown.Menu>
                  <Dropdown.Item>Tank Tops</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item position='center'>
              <Dropdown item text="Women">
                <Dropdown.Menu>
                  <Dropdown.Item>Tank Tops</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item position='center'>
              <Dropdown item text="Kids">
                <Dropdown.Menu>
                  <Dropdown.Item>Tank Tops</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item position='center'>
              <Dropdown item text="Brands">
                <Dropdown.Menu>
                  <Dropdown.Item>Tank Tops</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Menu.Item position='center'>Sale</Menu.Item>
          </Grid>
        </Menu>
    );
  }
}

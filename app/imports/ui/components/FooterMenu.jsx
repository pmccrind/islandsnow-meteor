import React from 'react';
import { Grid, Input, Label } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    const padding = {
          paddingTop: '20px',
          paddingBottom: '20px',
          textDecoration: 'none',
        };
    return (
        <Grid style={padding} columns={4} className='footer'>
          <Grid.Column floated={'right'}>
            <a>About Us</a>
            <br/>
            <a>Store Locations</a>
            <br/>
            <a>Employment</a>
            <br/>
            <a>Videos</a>
            <br/>
            <a>Shipping and Returns</a>
            <br/>
            <a>Terms and Conditions</a>
            <br/>
            <a>Privacy Policy</a>
            <br/>
          </Grid.Column>
          <Grid.Column floated={'right'}>
            <a>Men</a>
            <br/>
            <a>Women</a>
            <br/>
            <a>Kids</a>
            <br/>
            <a>Brands</a>
            <br/>
            <a>Sale</a>
          </Grid.Column>
          <Grid.Column floated={'right'}>
            Join our mailing list for updates. <br/>
            Sign up to receive our email updates! <br/>

            <Input placeholder='Enter Email Address'/>
            <Label color={'black'} size={'large'}>Join</Label>
          </Grid.Column>
        </Grid>

    );
  }
}

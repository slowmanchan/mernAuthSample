import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Dashboard = ({ secretData }) => (
  <Card className='container'>
    <CardTitle
      title='Dashboard'
      subtitle='You should get access only after auth'
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green'}}>{secretData}</CardText>}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
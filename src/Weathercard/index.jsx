import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment'; 
import './index.css'; 

function BasicExample({temp,date,max,min}) {
  return (
    <div> 
      <h1>{date}</h1>
    <Card 
    style={{ width: '18rem' }}
            border="success"
    >
    <Card.Body>
      <Card.Title>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</Card.Title>
      <Card.Text>
       <h1>{temp}</h1>
       <h2>Max Weather:{max}</h2>
       <h2>Min Weather:{min}</h2>
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
    
  );
}
export default BasicExample;


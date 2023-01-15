import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Travel = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Header>Accommodations</Card.Header>
                <Card.Body>
                    <Card.Title>University Park Marriott</Card.Title>
                    <Card.Text>
                        300 Wakara Way
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Travel;

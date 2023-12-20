import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function ResponsiveTablet() {
    return (
        <Container>
          <Row>
            <Col md={6} lg={4}>
              <input type="text" className="form-control" placeholder="Input 1" />
            </Col>
            <Col md={6} lg={4}>
              <input type="text" className="form-control" placeholder="Input 2" />
            </Col>
            <Col md={12} lg={4}>
              <input type="text" className="form-control" placeholder="Input 3" />
            </Col>
          </Row>
        </Container>
      );
}


import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Timer.css';

function Timer() {
  const [count, setCount] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const start = () => {
    setTimerOn(true);
  };

  const stop = () => {
    setTimerOn(false);
    setCount(0);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <Container className="my-5 text-center">
      <Row>
        <Col>
          <h1 className="display-1 ">{count}秒</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {!timerOn && (
            <Button variant="success" onClick={start}>開始</Button>
          )}
          {timerOn && (
            <>
              <Button variant="warning" onClick={stop}>停止</Button>
              <Button variant="secondary" onClick={reset}>やり直し</Button>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Timer;

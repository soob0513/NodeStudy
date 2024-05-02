import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

const ButtonList = () => {
  return (
    <div>
        <ButtonGroup aria-label="Basic example">
            <Button variant="outline-primary">
                <Link to="/join">회원가입</Link>
            </Button>
            <Button variant="outline-primary">
                <Link to="/login">로그인</Link>
            </Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Basic example">
            <Button variant="outline-primary">
                <Link to="/delete">회원탈퇴</Link>
            </Button>
            <Button variant="outline-primary">
                <Link>로그아웃</Link>
            </Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Basic example">
            <Button variant="outline-primary">
                <Link to="select">회원검색</Link>
            </Button>
            <Button variant="outline-primary">
                <Link to="select">회원전체검색</Link>
            </Button>
        </ButtonGroup>
    </div>
  )
}

export default ButtonList
import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

const ButtonList = () => {

  const handleLogout = ()=>{
    sessionStorage.removeItem('user');
    window.location.href="/"
  }

  return (
    <div>
      {JSON.parse(sessionStorage.getItem('user')) == null
      ? <ButtonGroup aria-label="Basic example">
          <Button variant="primary">
            <Link to="/join">회원가입</Link>
          </Button>
          <Button variant="primary">
            <Link to="/login">로그인</Link>
          </Button>
        </ButtonGroup>
      : 
      <div>
        <ButtonGroup aria-label="Basic example">
            <Button variant="primary">
              <Link to="/delete">회원탈퇴</Link>
            </Button>
            <Button variant="primary" onClick={handleLogout}>
              로그아웃
            </Button>
          </ButtonGroup>

          <ButtonGroup aria-label="Basic example">
              <Button variant="primary">
                <Link to="/select">회원검색</Link>
              </Button>
              <Button variant="primary">
                <Link to="/select">회원전체검색</Link>
              </Button>
          </ButtonGroup>
      </div>
        }
    </div>
  )
}

export default ButtonList
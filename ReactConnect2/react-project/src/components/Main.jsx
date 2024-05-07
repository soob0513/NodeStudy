import React, { useEffect } from 'react'

const Main = () => {

  // React는 함수형 컴포넌트 => 아무데나 session 불러오면 무한루프
  // 특정 시점에만! 불러와줘야함! => 화면이 렌더링된 직후
  // useEffect 
  // useEffect(()=>{}, []);

  useEffect(()=>{
    console.log('session', JSON.parse(sessionStorage.getItem('user')))
  }, []);



  return (
    <div>
      {/* {JSON.parse(sessionStorage.getItem('user')).nick}님 환영합니다.  */}
      {/* --> 로그아웃 두 번 이상 누르면 오류가 남. ~~.nick을 찾을 수 없어 */}
      {/* --> 조건문 사용!  */}

      {JSON.parse(sessionStorage.getItem('user')) == null
      ? <span>로그인해주세요</span>
      : <span>{JSON.parse(sessionStorage.getItem('user')).nick}님, 환영합니다.</span>
      }
      
    </div>
  )
}

export default Main
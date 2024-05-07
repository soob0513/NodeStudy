import React from 'react'

const Delete = () => {
  
  /** Delete 실습
   *  - 선행되어야 할 조건 : 로그인
   *  1) Delete.jsx 를 꾸며줄 것 
   *    => Login.jsx 를 참고해서 Password 부분, 버튼만 가져올 것
   *  2) Delete.jsx 에서 password를 입력 => pw라는 state로 관리 => 변화할 때마다 pw가 바뀌도록
   *  3) session 안에 있는 ID 추출
   *    - 참고 : Main.jsx , ButtonList.jsx 를 참고하면 가능
   *  4) back-end "/handleDelete" 라우터로 id, pw 전송
   *  5) (Node -> DB) DB를 삭제해줄 것
   *     - rows를 출력해보고, 실제 조건에 부합하는 경우와 아닌 경우를 비교해서 if문으로 관리
   *     - DB 연결 폴더 -> router.js 가시면 delete했던 실습 참고
   *  6) 삭제 성공 => result : 'success' / 삭제 실패 => result : 'failed'
   *  7) 삭제 성공 시, 세션까지 삭제
   *  8) 성공 시, 메인으로 이동 / 실패 시 다시 한 번 "/delete" 라우터로
   */

  return (
    <div>Delete</div>
  )
}

export default Delete
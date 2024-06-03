객체란?
- 세상에 존재하는 유무형의 모든 것. 
- 사람/동물/사물/장소/공연/상품/예약/주문/베송/후기/느낌/감정 등의 개념적인 정의.

(1) 고유한 속성
(2) 타인도 알 수 있는 것
(3) 사전에 등록된 단어 

A : "점심 라면?"
B : "그래"
    라면 --> 객체(O)
    "오뚜기진라면" --> 객체가 구현된 실체(인스턴스 : instance)

--------------------------
>객체의 '고유한 속성' --> Java에서 어떻게 나타내지?

- Primitive Type (원시/초기/기초 타입)

- 정수형(4)
- byte   8 bit(작은수), 2^8=256(-128 ~ -1, 0 ~ 127)
- short  16 bit(큰수)
- int    32 bit(더큰수)
- long   64 bit(더더큰수)
   
- 실수형(2)
- float  32 bit
- double 64 bit 

- 문자형(1)
- char   16 bit 유니코드

- 불리언(1)
- boolean  1 bit(true, false)

* 비트(bit, binary digit) : 컴퓨터에서 정보를 표시하기 위한 최소 단위(0, 1)

1 bit : 2^1 = 2가지
 0
 1

2 bit : 2^2 = 4가지
 00
 01
 10
 11

> '속성 + 기능'까지 포함된 객체는 Java에서 어떻게 다루지? ... Class

    (1) 사용자 정의 클래스(user-defined class) : Student.Java
    
    (2) 내장 클래스(built-in class) : ArrayList / String / Integer / Double / Random / Date / Calender etc



    학생 : 이름/나이/학과 + 출석하다()/공부하다()/시험보다()
           -------------   ------------------------------
              (속성)                 (기능)

public class Student {    // 클래스 이름
    
    private String name;   // 클래스 속성:멤버필드:Property

    public Student(){      // 생성자1

    }

    public Student(String name, int age){   // 생성자2
        this.name = name;
        this.age = age;
    }
    
    public int getAge(){
        this.age = age;
    }
}


-----------------------------------
> 추상클래스(Abstract Class)

    type          (subtype)

 - 구기종목 : 축구/야구/배구/농구
 - 가전제품 : TV/냉장고/세탁기/전자레인지
 - 모양    : 세모/네모/동그라미

    class C extends A     (O)
    class C extends A, B  (X)  -- 자바에서는 중복상속 금지!

-----------------------------------
> 인터페이스(interface) : 객체들 사이에서 자주 발생하는 동작이나 상태를 정의해 놓은 것.

    (사람) <----> (사람)
            talk
            fight

----------------------------
public interface Human {
    public void talk();   // 구현부가 없는 함수:추상메소드
    public void fight();
}
---------------------------
public interfact ITV {
    pulic void on();
}

---------------------------
* Referenct Type이란? 클래스/추상클래스/인터페이스 등

Student.java -> Student.class -> JVM (Java Virtual Machine) -> Java Runtime 

int a = 10;                   // a는 변수
Student s1 = new Student();   // s1는 참조변수


  모든 변수               인스턴스

(Stack Area)............(Heap Area)

int a = 10;
Student s1 = ?

"참조변수 s1은 자신에게 할당된 인스턴스를 어떻게 참조하죠?"
"힙 영역에서 인스턴스가 차지하고 있는 메모리 주소를 참조해서 찾아요."
"참조변수는 힙 영역에서 인스턴스가 차지하고 있는 메모리 주소다."

* 인스턴스 : 객체를 토대로 만들어진 존재, 실체

Student s1 = new Student();
Human h1 = new Human();

for (Student s : List){
    System.out println(s.getName());
}

---------------------------------
* ArrayList 사용 시 주의사항 3가지
    (1) 타입<T>를 생략하면, 기본타입이 <Object>로 세팅됨.



-------------------------------------------
* 자바의 5대 핵심 개념 : 캡슐화 / 상속 / 다형성 / 구현 / 직렬화

  (1) 캡슐화(encapsulation) : 속성이나 기능을 넣어서 클래스/추상클래스/인터페이스를 만드는 것.

        en(=make) + capsulate(?) + tion(명사형 어미)

  (2) 상속(inheritance) : 부모 클래스의 속성과 기능을 자식 클래스가 물려 받는 것.

  (3) 다형성(polymorphism) : 라틴어(multi)=그리스어(poly)=영어(many) + morph(형태)
     (3-1) 서브타입 다형성(subtype polymorphism)
     (3-2) 매개변수 다형성(paramatric polymorphism) : 생성자 오버로딩, 메서드 오버라이딩 등

  (4) 구현(implementation) : 인터페이스에 정의되어 있는 추상 메소드를 자식 클래스에서 초기화 하는 것. 

  (5) 직렬화(serialization) : 네트워크 상에서 전송 효율성을 높이기 위해서 데이터를 바이트 코드(byte code) 형태로 바꾸는 것


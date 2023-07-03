# 제목

### 소개

가상 클라이언트 A씨를 가정하여 만든 개인 포트폴리오 사이트입니다.

### 배포링크

배포방식은 AWS:S3의 간이 배포를 이용하였습니다.
<a href="http://kmkm37.react.portfoilo.s3-website.ap-northeast-2.amazonaws.com">http://kmkm37.react.portfoilo.s3-website.ap-northeast-2.amazonaws.com</a>

### 개발 도구 및 환경

##### 개발환경: VScode, npm, Parcel-bundler

##### 개발도구: HTML, CSS, Javascript, jQuery, React

### 프로젝트 설명

#### 프로젝트 계획서

###### <a href="">계획서기열람하기</a>

#### 헤더(Header) & 푸터(Footer)

- 헤더와 푸터는 각페이지의 Html에 삽입하고 js와 css를 공유하여 import하는 방식을 이용했습니다.

#### 메인페이지(home.js)

1. Swiper를 사용하여 광고 배너가 보이도록 만들었습니다.
2. Best Item이란 타이틀에 같은 카테고리의 상품들을 보여주고, more 클릭시 product페이지로 이동하게 만들었습니다.
3. 데이터는 Json으로 작성하여 불러오는 방식을 이용했습니다.

#### 상품 페이지(product.js)

1. 데이터 방식은 Json으로 작성하여 불러오는 방식을 이용
2. Searching 기능과 카테고리를 넣어서 찾는 종류나 이름에 따라 정렬되도록 만듬

#### 상품상세 페이지(detail.js)

1. 상품 페이지에서 제품 클릭시 상세페이지(detail.js)로 이동하여 상세정보가 나타나게 하고 카트에 넣는 기능을 추가
2. 카트에 넣을때 해당 데이터는 Local Storage를 통해서 임시로 넣어둠
3. 현재 상품과 같은 카테고리에 속한 상품들을 연관상품으로 보여주도록 만듦

#### 장바구니 페이지(wishlist.js)

1. 상세페이지에서 장바구니 추가시 장바구니 페이지로 이동되고 장바구니 페이지에 아이템이 추가되며 삭제시 Local Storage에서 삭제
2. 장바구니 item 추가 삭제 후 새로고침시 header에 장바구니 아이콘에 표시되는 숫자가 변하는 형식

### 자기평가

#### 부족한점

1. Local Storage 활용능력이 아직 부족하여 장바구니 추가시 새로고침을 하지않으면 header에 표시되는 장바구니 숫자가 늘어나지 않는데 추후에 공부를하여 다시 수정해야 할 것 같습니다.
   
2. React routing을 활용한 첫 포트폴리오라서 계획 및 설계 단계부터 어려움을 많이 겪었습니다.
   routing react-hook 에 대해서 더 많은 공부를 해야겠다고 셍긱헸습니다.

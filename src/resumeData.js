let resumeData = {
  imagebaseurl: 'https://jaewc.github.io/j_portfolio/',
  name: 'Choi Jae Won',
  role: 'Software Engineer',
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jae-won-choi-152a9a14a/',
      className: 'fa fa-linkedin'
    },
    {
      name: 'github',
      url: 'https://github.com/JaeWC',
      className: 'fa fa-github'
    }
  ],
  aboutme:
    '2018년 7월, 본격적으로 개발을 공부하며 개발자로서의 새로운 삶을 살아가고 있다.',
  address_1: '경기도 성남시 분당구',
  address_2: '내정로 185',
  phoneNumber: '82-10-6655-2027',
  email: 'j.thechois@gmail.com',
  portfolio: [
    {
      id: '01',
      name: '_ToPic',
      description1: 'App Store & Google Play',
      description2: '(2019년 1월 출시 예정)',
      service: '같은 주제에 대해 유저들이 만들어가는 사진전 SNS',
      front_end: 'React Native, Redux',
      back_end: 'Express, MongoDB, AWS',
      works: [
        'multer 모듈을 사용하여 AWS S3에 사진 업로드 및 삭제 기능을 구현하고 이미지 최적화 작업 진행',
        'JWT Token 발급을 위한 Social Login(Kakao Login)과 앱 자체 로그인 구현으로 사용자 인증',
        'Redux를 사용하여 각 React Native Component 별로 필요한 State만을 사용할 수 있도록 구현',
        'Redux State를 활용하여 댓글 등록/삭제와 추천 수 증가/감소 action 시 Front 처리 속도 향상',
        'User Experience 극대화를 위해 React Native Navigation의 Navigation Action 최적화'
      ],
      tags: ['Mobile App', 'Full-Stack'],
      thumbnail_img: 'images/portfolio/_ToPic/_ToPic.png',
      detail_img: 'images/portfolio/_ToPic/m-_ToPic.png',
      video: 'https://www.youtube.com/watch?v=qvjwIZ5GX3k'
    },
    {
      id: '02',
      name: 'WeGoing',
      description1: 'Google Play(2018년 연내 출시 예정)',
      description2: 'App Store(2019년 1월 출시 예정)',
      service: '실시간 위치 공유 메신저',
      front_end: 'React Native, Redux, Socket.io',
      back_end: 'Express, MySQL, Redis, Socket.io, AWS',
      works: [
        '1시간의 채팅방 유효기간을 구현하고 DB 부하 감소와 Log 활용을 위한 Node 서버 Scheduler 구성',
        '회원가입 및 로그인 간편화와 사용자 인증을 위해 SMS 인증번호 시스템 구현',
        '실시간 위치 공유와 채팅 구현을 위해 Socket 통신이 가능한 Socket.io 라이브러리를 사용',
        'Socket 통신으로 업데이트하지 못한 위치 및 대화 내용을 최신화하기 위해 Redis 사용',
        'Node.js 서버 clustering과 Stateful Application의 공유 메모리를 위한 Redis Store 사용'
      ],
      tags: ['Mobile App', 'Back-end'],
      thumbnail_img: 'images/portfolio/WeGoing/WeGoing.png',
      detail_img: 'images/portfolio/WeGoing/m-WeGoing.png',
      video: 'https://www.youtube.com/watch?v=TDw_jwEcN5M'
    }
  ],
  skills: [
    'JavaScript',
    'Node.js',
    'WebSocket',
    'MySQL',
    'MongoDB',
    'Redis',
    'AWS',
    'ReactJS',
    'React Native',
    'Redux',
    'Git',
    'Python'
  ],
  history: [
    {
      title: '_ToPic',
      specialization: 'Full-Stack Developer',
      from: 'Oct 2018',
      to: 'Nov 2018',
      Achievements: [
        'Node.js를 통한 AWS S3 이미지 업로드∙삭제 및 이미지 최적화 작업',
        'MongoDB Schema 디자인 및 Mongoose를 이용한 CRUD System 구축',
        'User Experience 최적화 및 어플리케이션 작동 최적화를 위한 React-Native Navigation Design',
        'Redux 및 Redux-thunk를 사용하여 각 Component 별 State 관리 최적화'
      ]
    },
    {
      title: 'WeGoing',
      specialization: 'Back-End Developer',
      from: 'Nov 2018',
      to: 'Dec 2018',
      Achievements: [
        'Naver Cloud Platform SENS를 이용한 핸드폰 SMS 인증번호 시스템 구현',
        'Socket.io Clustering과 Redis Pub/Sub을 이용한 Server Load Balancing 구현',
        'MySQL Schema 디자인 및 Sequelize를 이용한 CRUD System 구축',
        '최대 동시접속 가능한 유저 수를 파악하기 위한 Artillery Server Stress Test 진행'
      ]
    }
  ]
};

export default resumeData;

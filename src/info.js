import React from "react";
import { Link, Typography } from "@material-ui/core";

export const languages = ["en", "ru"];

export const langIcons = {
  en: {
    name: "English",
    icon: "uk",
  },
  ru: {
    name: "Русский",
    icon: "russia",
  },
};

function getAge() {
  const today = new Date();
  const birthDate = new Date(1999, 6, 1);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export const about = {
  age: getAge(),
  // city: "about.city_name",
  email: "olyakrylo24@gmail.com",
  phone: "+7(922)-216-26-25",
  cv: "https://github.com/olyakrylo/CV_pdf/blob/master/Krylova_frontend_engineer.pdf",
};

export const contactIcons = [
  {
    modificator: "vk",
    icon: "vk",
    href: "https://vk.com/olyakrylo",
  },
  {
    modificator: "tg",
    icon: "tg",
    href: "https://t.me/olyakrylo",
  },
  {
    modificator: "git",
    icon: "github",
    href: "https://github.com/olyakrylo",
  },
  {
    modificator: "linkedin",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/olga-krylova-3930871b6/",
  },
];

export const biocadInfoList = {
  ru: [
    <Typography>
      Разработка системы мониторинга лабораторного оборудования с использованием <b>Angular</b> на
      клиентской части и <b>NestJS</b> в качестве Backend For Frontend <b>(BFF)</b>,
      автоматизирующей процессы мониторинга оборудования и работы с ним. Система состоит из модулей
      для работы с оборудованием, отчетами, дашбордами и различными графиками.
      <br />
      <b>Стек:</b> Angular 11, RxJs, NestJS, ECharts, Material UI, svg.
    </Typography>,
    <Typography>
      Реализация взаимодействия между фронтендом и бэкендом с использованием <b>REST</b> и{" "}
      <b>WebSockets</b>.
      <br />
      <b>Стек:</b> fetch API, Centrifugo.
    </Typography>,
    <Typography>
      Разработка части модуля для аутентификации и авторизации пользователей через{" "}
      <b>Microsoft Azure</b> и <b>KeyCloak</b>.
      <br />
      <b>Стек:</b> openid-client.
    </Typography>,
    <Typography>
      Участие в построении <b>CI/CD</b> пайплайна, который помогает тестировать приложение на каждой
      стадии.
      <br />
      <b>Стек:</b> Docker, Kubernetes, GitLab
    </Typography>,
  ],
  en: [
    <Typography>
      Developed a system for laboratory equipment monitoring using <b>Angular</b> for client side
      and <b>NestJS</b> server as Backend For Frontend <b>(BFF)</b>, which <b>automated</b> the
      process of equipment booking and monitoring. The system consisted of modules for working with
      laboratory equipment, reports, dashboards and various charts.
      <br />
      <b>Stack:</b> Angular 11, RxJs, NestJS, ECharts, Material UI, svg.
    </Typography>,
    <Typography>
      Implemented communication between frontend and backend using <b>REST</b> and <b>WebSockets</b>
      .<br />
      <b>Stack:</b> fetch API, Centrifugo.
    </Typography>,
    <Typography>
      Developed a part of the module for authentication and authorisation using{" "}
      <b>Microsoft Azure</b> and <b>KeyCloak</b>.<br />
      <b>Stack:</b> openid-client.
    </Typography>,
    <Typography>
      Participated in building <b>CI/CD</b> pipeline which helps to test the application at each
      stage.
      <br />
      <b>Stack:</b> Docker, Kubernetes, GitLab.
    </Typography>,
  ],
};

export const gpnInfoList = {
  ru: [
    <Typography>
      Разрабатывала систему навигации для морских судов, которая <b>помогала</b> морским капитанам
      отслеживать положения и маршруты судов, следить за погодными условиями, ледовой обстановкой и
      другими факторами риска.
      <br />
      <b>Cтек:</b> Angular 11, RxJs, Leaflet.
    </Typography>,
    <Typography>
      Система также обеспечивала <b>взаимодействие</b> с картой для различных отметок и возможностью
      ими <b>делиться</b>.
    </Typography>,
  ],
  en: [
    <Typography>
      Developed a navigation system for sea vessels using <b>Angular</b> and <b>Leaflet</b>, which{" "}
      <b>helped</b> sea captains to track the positions and routes of ships, monitor weather or ice
      conditions and other risk factors.
      <br />
      <b>Stack:</b> Angular 11, RxJs, Leaflet.
    </Typography>,
    <Typography>
      The system also provided <b>interaction</b> with the map for various marks and the ability to{" "}
      <b>share</b> them.
    </Typography>,
  ],
};

export const projects = [
  {
    intlName: "mc",
    // linkTitle: "Vercel",
    link: "https://memory-cards-v2.vercel.app/app",
    techs: ["Next.js", "TypeScript", "Redux", "mui", "MongoDB", "Redis"],
    gitHubLink: "https://github.com/olyakrylo/memory-cards-v2",
    infoList: {
      ru: [
        <Typography>
          Приложение для создания публичных или приватных тем с карточками для запоминания с простой
          авторизацией и панелью администратора.
        </Typography>,
        <Typography>
          Для работы с базой без использования удаленного сервера используется{" "}
          <Link href="https://mongoosejs.com/" target="_blank">
            mongoose
          </Link>
          . Также ипользуется{" "}
          <Link href="https://redis.io/" target="_blank">
            Redis
          </Link>{" "}
          для хранения изображений.
        </Typography>,
        <Typography>
          Пользовательские хуки используются в качестве сервисов для обращения к API и для
          взаимодействия с состоянием приложения.
        </Typography>,
      ],
      en: [
        <Typography>
          An application for creating private or public topics with memory cards with simple
          authorisation and admin panel.
        </Typography>,
        <Typography>
          <Link href="https://mongoosejs.com/" target="_blank">
            Mongoose
          </Link>{" "}
          is used for database fetching without any remote server and Redis is used to store images.
        </Typography>,
        <Typography>
          Custom hooks are used as services for api fetching and interaction with redux state.
        </Typography>,
      ],
    },
  },
  {
    intlName: "mts",
    linkTitle: "Pages",
    link: "https://olyakrylo.github.io/multi-tenant-shop/#/",
    techs: ["React", "TypeScript", "Django"],
    gitHubLink: "https://github.com/olyakrylo/multi-tenant-shop",
    infoList: {
      ru: [
        <Typography>
          На бэкенде используется{" "}
          <Link
            target="_blank"
            href="https://docs.microsoft.com/en-us/azure/azure-sql/database/saas-tenancy-app-design-patterns"
          >
            multi-tenant паттерн
          </Link>
          , чтобы использовать единую базу для всех клиентов.
        </Typography>,
        <Typography>
          Единый фронтенд для всех клиентов, данные зависят от переданного токена.
        </Typography>,
        <Typography>
          Пользователи с ролью администратора могут использовать панель администратора для
          управления данными.
        </Typography>,
      ],
      en: [
        <Typography>
          Backend uses a simple{" "}
          <Link
            target="_blank"
            href="https://docs.microsoft.com/en-us/azure/azure-sql/database/saas-tenancy-app-design-patterns"
          >
            multi-tenant pattern
          </Link>{" "}
          for using a single database to host data for all tenants.
        </Typography>,
        <Typography>
          Frontend is the same for all tenants and its data depends on tenant token.
        </Typography>,
        <Typography>
          Users with admin rights can see an admin panel for manipulating data.
        </Typography>,
      ],
    },
  },
  // {
  //   intlName: "pb",
  //   linkTitle: "Heroku",
  //   link: "https://amcp-pb.herokuapp.com/",
  //   techs: ["ReactJS", "Django", "Heroku"],
  // },
  {
    intlName: "ecs",
    techs: ["React-Native", "Expo SDK"],
    gitHubLink: "https://github.com/LazyDareDevil/employment-control-system/tree/Frontend",
    infoList: {
      ru: [
        <Typography>
          Система управления рабочими местами в помещении с использованием метки-токена на смартфоне
          и определением ее местоположения в помещении, оборудованном системой внутренней навигации.
        </Typography>,
        <Typography>
          Система может распознать метку, получить информацию о токене, валидировать его в системе
          управления помещением, показать сотруднику рабочий стол на плане помещения в мобильном
          приложении, в соответствии с его токеном, и включить оборудование на рабочем столе.
        </Typography>,
        <Typography>
          Через подтверждение сотрудником на мобильном приложении, система вычисляет суммарное время
          нахождения сотрудника на рабочем месте и передает эту информацию в мобильное приложение
          для оплаты.
        </Typography>,
      ],
      en: [
        <Typography>
          An employment control system using a token on a smartphone and determining its location in
          a room equipped with an internal navigation system.
        </Typography>,
        <Typography>
          The system can get information about the token, validate it in the room management system,
          show the employee the workplace on the room plan in the mobile application and turn on the
          equipment on the workplace.
        </Typography>,
        <Typography>
          After the employee's confirmation in the mobile application, the system calculates total
          time spent at the workplace and transmits this information to the mobile application for
          payment.
        </Typography>,
      ],
    },
  },
];

export const skills = [
  {
    icon: "js.svg",
    text: "JavaScript",
  },
  {
    icon: "ts.svg",
    text: "TypeScript",
  },
  {
    icon: "react.svg",
    text: "React & React-Native",
  },
  {
    icon: "angular.svg",
    text: "Angular",
  },
  {
    icon: "rxjs.svg",
    text: "RxJS",
  },
  {
    icon: "next-js.svg",
    text: "Next.js",
  },
  {
    icon: "nest-ts.svg",
    text: "NestJS",
  },
  {
    icon: "leaflet.svg",
    text: "Leaflet",
  },
  {
    icon: "mongo.svg",
    text: "MongoDB",
  },
  // {
  //   icon: "html.svg",
  //   text: "HTML 5",
  // },
  // {
  //   icon: "css.svg",
  //   text: "CSS 3",
  // },
  {
    icon: "sass.svg",
    text: "SASS & LESS",
  },
  {
    icon: "git.svg",
    text: "Git",
  },
  {
    icon: "python.svg",
    text: "Python",
  },
  {
    icon: "django.svg",
    text: "Django",
  },
  {
    icon: "expo.svg",
    text: "Expo SDK",
  },
  {
    icon: "figma.svg",
    text: "Figma",
  },
  {
    icon: "heroku.svg",
    text: "Heroku",
  },
];

export const softSkills = [
  {
    icon: "communication.svg",
    text: "skills.communication",
  },
  {
    icon: "collaboration.svg",
    text: "skills.teamwork",
  },
  {
    icon: "sync-problem.svg",
    text: "skills.problem_solving",
  },
  {
    icon: "details.svg",
    text: "skills.attention_to_detail",
  },
];

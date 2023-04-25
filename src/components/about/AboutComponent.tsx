import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const usersData = [
  { username: "johnd", password: "m38rmF$" },
  { username: "mor_2314", password: "83r5^_" },
  { username: "kevinryan", password: "kev02937@" },
  { username: "donero", password: "ewedon" },
  { username: "derek", password: "jklg*_56" },
  { username: "david_r", password: "3478*#54" },
  { username: "snyder", password: "f238&@*$" },
  { username: "hopkins", password: "William56$hj" },
  { username: "kate_h", password: "kfejk@*_" },
  { username: "jimmie_k", password: "klein*#%*" },
];

const AboutComponent = () => {
  return (
    <Container fixed>
      <Grid
        container
        flexDirection={"column"}
        alignItems={"start"}
        justifyContent={"center"}
        mt={5}
        spacing={3}
      >
        <Grid item>
          <Typography variant="h6">Проект: Shikalov Store</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            О проекте: Клиентская часть интернет-магазина
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Цель проекта: практическое применение знаний по технологиям,
            полученных на обучении в GeekBrains и самостоятельно
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Стек технологий:</Typography>
          <Typography variant="subtitle1">
            рендер компонентов : React.js
          </Typography>
          <Typography variant="subtitle1">
            типизация компонентов : Typescript
          </Typography>
          <Typography variant="subtitle1">
            навигация по страницам : React-Router_Dom v6
          </Typography>
          <Typography variant="subtitle1">
            работа с состоянием приложения : Redux Toolkit
          </Typography>
          <Typography variant="subtitle1">
            взаимодействие с сервером : axios
          </Typography>

          <Typography variant="subtitle1">
            предоставление данных: сайт fakestoreapi.com
          </Typography>
          <Typography variant="subtitle1">
            верстка компонентов : Material UI
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Комментарии к проекту:</Typography>
          <Typography variant="body1">
            В проекте реализована только клиентская часть. К сожалению,
            fakestoreapi не поддерживает некоторые серверные возможности, такие
            как поиск товара по названию или пользователя по никнейму или имени.
            Поэтому некоторые моменты логики выполнены на клиенте и работают,
            возможно, чуть с большей нагрузкой, чем если бы были выполнены на
            сервере.
          </Typography>
          <Typography variant="body1">
            Регистрация в fakestoreapi есть, но она возвращает только токен и не
            возвращает обратно данные о зарегистрированном пользователе и не
            дает возможность сделать авторизацию нового пользователя, поэтому я
            ее не стал добавлять.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            Для входа в приложение Вы можете воспользоваться любым из
            приведенных на этой странице пользователей:
          </Typography>
        </Grid>
        {usersData.map((user) => (
          <Grid item>
            <Typography variant="subtitle1">
              username: {user.username}
            </Typography>
            <Typography variant="subtitle1">
              password: {user.password}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutComponent;

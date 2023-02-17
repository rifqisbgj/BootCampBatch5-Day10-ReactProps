import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { faker } from "@faker-js/faker";
import App from "./App";
// moment untuk mengecek tanggal input ke tanggal sekarang
import moment from "moment/moment";

// mengisi data post
const dataPost = [
  {
    name: faker.name.fullName(), // set dengan faker dengan jenis nama lengkap
    image: faker.image.avatar(), // set dengan faker dengan jenis gambar avatar
    post: faker.lorem.lines(), // set dengan faker jenis lorem
    // dari data faker, kemudian package moment akan menghitung selisih dengan tanggal sekarang
    createdAt: moment(faker.date.recent()).fromNow(),
  },
  {
    name: faker.name.fullName(),
    image: faker.image.avatar(),
    post: faker.lorem.lines(),
    createdAt: moment(faker.date.recent()).fromNow(),
  },
  {
    name: faker.name.fullName(),
    image: faker.image.avatar(),
    post: faker.lorem.lines(),
    createdAt: moment(faker.date.recent()).fromNow(),
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
// nilai dari dataPost[] akan dipassing ke var data yang akan dibaca pada fungsi App
root.render(<App data={dataPost} />);

import MockAdapter from "axios-mock-adapter";
import { axios } from "./axios";

const mock = new MockAdapter(axios);

const allTickets = [
  {
    id: 7,
    received: "2021-08-31 18:09:35",
    title: "some title",
    message: "some message",
    status: "pending",
  },
  {
    id: 8,
    received: "2021-08-31 18:09:35",
    title: "some 22 title",
    message: "some message",
    status: "answered",
  },
  {
    id: 9,
    received: "2021-08-31 18:09:35",
    title: "some title",
    message: "some message",
    status: "pending",
  },
];

mock.onGet("/tickets").reply(200, {
  status: 200,
  errors: null,
  data: allTickets,
});

export { mock };

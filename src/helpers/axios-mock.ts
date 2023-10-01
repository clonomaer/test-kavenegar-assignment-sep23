import MockAdapter from "axios-mock-adapter";
import { axios } from "./axios";
import { TicketData, TicketStatus } from "../types/ticket";
import { TicketMessageData } from "../types/ticket-message";

const mock = new MockAdapter(axios, { delayResponse: 600 });

const allTickets: TicketData[] = [
  {
    id: 7,
    received: "2021-08-31 18:09:35",
    title: "some title",
    message: "some message",
    status: TicketStatus.PENDING,
  },
  {
    id: 8,
    received: "2021-08-31 18:09:35",
    title: "some 22 title",
    message: "some message",
    status: TicketStatus.ANSWERED,
  },
  {
    id: 9,
    received: "2021-08-31 18:09:35",
    title: "some title",
    message: "some message",
    status: TicketStatus.PENDING,
  },
];

const ticketsMessagesData: { [key: number]: TicketMessageData[] } = {
  7: [
    {
      id: 233,
      message: "first admin reply",
    },
    {
      id: 2323,
      message: "user reply",
    },
    {
      id: 2343,
      message: "second admin reply",
    },
  ],
  8: [
    {
      id: 3233,
      message: "first admin reply",
    },
    {
      id: 32323,
      message: "user reply",
    },
    {
      id: 32343,
      message: "second admin reply",
    },
  ],
  9: [
    {
      id: 1233,
      message: "first admin reply",
    },
    {
      id: 12323,
      message: "user reply",
    },
    {
      id: 13233,
      message: "second admin reply",
    },
  ],
};

mock.onGet("/tickets").reply(200, {
  status: 200,
  errors: null,
  data: allTickets,
});

const singleTicketUrlRegex = /\/ticket\/([0-9]+)/;
mock.onGet(singleTicketUrlRegex).reply((config) => {
  const match = singleTicketUrlRegex.exec(config.url ?? "");
  if (match && match[1]) {
    const item = allTickets.find((elm) => elm.id === Number(match[1]));
    if (item) {
      return [
        200,
        {
          status: 200,
          errors: null,
          data: {
            ticket: item,
            messages: ticketsMessagesData[item.id],
          },
        },
      ];
    }
  }
  return [204, { status: 404, errors: null, data: null }];
});

export { mock };

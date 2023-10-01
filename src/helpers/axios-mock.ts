import MockAdapter from "axios-mock-adapter";
import { axios } from "./axios";
import { TicketData, TicketStatus } from "../types/ticket";
import { TicketMessageData } from "../types/ticket-message";
import _ from "lodash";
import { formatServerDate } from "../utils/format-datetime";

const mock = new MockAdapter(axios, { delayResponse: 600 });

const allTickets: TicketData[] = [
  {
    id: 1001,
    received: "2023-08-31 18:09:35",
    title: "Internet Connection Issue",
    message:
      "I'm experiencing issues with my internet connection. Can someone assist me?",
    status: TicketStatus.PENDING,
  },
  {
    id: 1002,
    received: "2021-08-31 18:09:35",
    title: "Billing Inquiry",
    message:
      "I have a question about my recent bill. Can you provide some clarification?",
    status: TicketStatus.ANSWERED,
  },
  {
    id: 1003,
    received: "2019-08-31 18:09:35",
    title: "Software Installation Problem",
    message:
      "I'm having trouble installing the software on my computer. Need help!",
    status: TicketStatus.CLOSED,
  },
];

const ticketsMessagesData: { [key: number]: TicketMessageData[] } = {
  1001: [
    {
      id: 2001,
      message:
        "Hi there! We apologize for the inconvenience you're facing with your internet connection. Our technical team is looking into it and will get back to you shortly.",
    },
    {
      id: 2002,
      message:
        "I appreciate your quick response! Let me know if you need any additional information from my end.",
    },
    {
      id: 2003,
      message:
        "Good news! The issue has been identified and resolved. Your internet connection should be stable now. If you face any further problems, feel free to reach out.",
    },
  ],
  1002: [
    {
      id: 3001,
      message:
        "Hello! Thank you for reaching out regarding your billing inquiry. I've reviewed your account, and I'll provide you with the details you need.",
    },
    {
      id: 3002,
      message:
        "Great! Please go ahead and share the details. I want to make sure everything is in order.",
    },
    {
      id: 3003,
      message:
        "I've sent you a detailed breakdown of your recent bill via email. If you have any more questions, feel free to ask.",
    },
  ],
  1003: [
    {
      id: 4001,
      message:
        "Hi! I see you're having trouble with software installation. Let's troubleshoot the issue together. Have you encountered any error messages during the installation process?",
    },
    {
      id: 4002,
      message:
        "Yes, I've received an error message about missing files. I'm not sure how to proceed from here.",
    },
    {
      id: 4003,
      message:
        "Thank you for providing that information. I'll guide you through the steps to resolve the missing files issue. Let's get your software installed successfully!",
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

mock.onPost("/ticket").reply((config) => {
  const id = _.random(0, Number.MAX_SAFE_INTEGER);
  allTickets.push({
    ...JSON.parse(config.data),
    id,
    received: formatServerDate(new Date()),
    status: TicketStatus.PENDING,
  });
  ticketsMessagesData[id] = [];
  return [
    201,
    {
      status: 201,
      errors: null,
      data: null,
    },
  ];
});

mock.onPost(singleTicketUrlRegex).reply((config) => {
  const match = singleTicketUrlRegex.exec(config.url ?? "");
  if (match && match[1]) {
    const item = allTickets.find((elm) => elm.id === Number(match[1]));
    if (item) {
      const id = _.random(0, Number.MAX_SAFE_INTEGER);
      ticketsMessagesData[item.id].push({ ...JSON.parse(config.data), id });
      return [
        201,
        {
          status: 201,
          errors: null,
          data: null,
        },
      ];
    }
  }
  return [204, { status: 404, errors: null, data: null }];
});

export { mock };

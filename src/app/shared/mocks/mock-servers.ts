import {Server} from "../../core/models/server.model";

export const SERVERS: Server[] = [
  {
    instanceType: 'medium',
    name: 'Production Server',
    status: 'stable',
    amount: 522451,
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'large',
    name: 'User Database',
    status: 'stable',
    amount: 522451,
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'small',
    name: 'Development Server',
    status: 'offline',
    amount: 522451,
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'small',
    name: 'Testing Environment Server',
    status: 'stable',
    amount: 522451,
    started: new Date(15, 1, 2017)
  }
];

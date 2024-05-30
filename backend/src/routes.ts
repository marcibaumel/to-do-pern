import { body, param } from 'express-validator';
import { UserController } from './controller/UserController';

export const Routes = [
    {
        method: 'get',
        route: '/users',
        controller: UserController,
        action: 'all',
        validation: []
    },
    {
        method: 'get',
        route: '/users/:id',
        controller: UserController,
        action: 'one',
        validation: [param('id').isInt()],
    },
    {
        method: 'post',
        route: '/users',
        controller: UserController,
        action: 'save',
        validation: [body('age').isInt({ min: 0 }).withMessage('Must be positive integer'), body('firstName').isString(), body('lastName').isString()],
    },
    {
        method: 'delete',
        route: '/users/:id',
        controller: UserController,
        action: 'remove',
        validation: [param('id').isInt()],
    },
    {
        method: 'get',
        route: '/favicon.ico',
        controller: UserController,
        action: 'favicon',
        validation: []
    },
];

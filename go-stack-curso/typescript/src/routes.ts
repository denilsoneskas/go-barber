import { Request, Response } from "express";
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'denilsonm01@hotmail.com',
    password: '123456',
    techs: [
      'Java',
      'React',
      { title: 'JavaScript', experience: 30 },
  ]
  });

  return response.json({ message: 'Olá Denirso!'});
}
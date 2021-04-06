/**
 * Para a criação de usuário
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>; // Array de tipo variável
  //techs: string[];   // Array de tipo único)
}

export default function createUser( {name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}
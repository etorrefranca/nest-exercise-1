import { Injectable } from '@nestjs/common';
import { UserData } from './users.interface';

@Injectable()
export class UsersService {
  getUserByAlphabet(): UserData[] {
    const users = this.getUsers();

    return users.sort((firstUser: UserData, secondUser: UserData) => {
      const firstUserName = firstUser.firstName;
      const secondUserName = secondUser.firstName;

      if (firstUserName === secondUserName) {
        if (firstUser.lastName < secondUser.lastName) return -1;
        if (firstUser.lastName > secondUser.lastName) return 1;
        return 0;
      }

      if (firstUserName < secondUserName) return -1;
      if (firstUserName > secondUserName) return 1;
      return 0;
    });
  }

  getUsers(): UserData[] {
    return [
      {
        id: 1,
        firstName: 'Oliver',
        lastName: 'Gartland'
      },
      {
        id: 2,
        firstName: 'Anna',
        lastName: 'Watts'
      },
      {
        id: 3,
        firstName: 'Andy',
        lastName: 'Brown'
      },
      {
        id: 4,
        firstName: 'Maisie',
        lastName: 'Curtis'
      },
      {
        id: 5,
        firstName: 'Jonathan',
        lastName: 'Curtis'
      },
      {
        id: 6,
        firstName: 'Jonathan',
        lastName: 'Wright'
      },
      {
        id: 7,
        firstName: 'Jennifer',
        lastName: 'Tomkinson'
      },
      {
        id: 8,
        firstName: 'Rich',
        lastName: 'Richman'
      }
    ];
  }
}

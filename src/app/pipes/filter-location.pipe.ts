import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user';

@Pipe({
  name: 'filterLocation',
})
export class FilterLocationPipe implements PipeTransform {
  transform(users: User[] | null, ...locationIds: number[]): User[] | null {
    if (!users || !locationIds.length) {
      return users;
    }
    return users.filter((user) => locationIds.includes(user.locationId));
  }
}

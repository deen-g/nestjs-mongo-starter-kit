export class CreateUserDto {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  roles: string;
  isEnabled?: boolean = true;
}

export class UserProfile {
  constructor(
    public email: string,
    public emailNotification: boolean = false
  ) { }
}
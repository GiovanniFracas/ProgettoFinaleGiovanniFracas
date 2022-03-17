export class SignUp {
  username!: string;
    email!: string;
    password!: string

    roles!: [
        {
            id: number | null;
            roleName: string | null
        }
    ]
}

export type UserDTO = {
    id?: string;
    idCompanyEmployee: string;
    firstName: string;
    lastName: string;
    passWord: string;
    isActive: boolean;
    createdAt: Date | null
    updatedAt: Date | null
}
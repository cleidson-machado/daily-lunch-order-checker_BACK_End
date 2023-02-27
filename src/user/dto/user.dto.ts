   /**
    * DTO-FULL: Padrão que representa a Entidade / Model no Prisma para Usuário...
    */
export class UserDTO {
    /**
     * Esse atributo é baseado no número de registro do empregado Cassems. Geralmente apenas 04 digitos. Campo único.
     * @example 1234
     */
    idCompanyEmployee: string;

    /**
     * Reservado para o primeiro nome apenas.
     * @example Fulano
     */
    firstName: string;

    /**
     * Reservado para o sobre-nome completo.
     * @example Silva
     */
    lastName: string;

    /**
     * Reservado para senha que será criada no código via HashCode Xpto.
     * @example xxxxxxxxxxxxxxxx
     */
    passWord: string;

    /**
     * Reservado para identificar o Email do Usuário. Campo único.
     * @example fulano@fakemail.com
     */
    email: string;

    /**
     * Reservado para identificar quando o usuário está ativo ou não.
     * @example true
     */
    isActive: boolean;

    /**
     * Armazena automaticamente a data de criação do registro.
     * @example 2023-02-07T22:54:19.505Z
     */
    createdAt?: Date | null

    /**
     * Armazena automaticamente a data de alteração do registro.
     * @example 2023-02-07T22:54:19.505Z
     */
    updatedAt?: Date | null
}
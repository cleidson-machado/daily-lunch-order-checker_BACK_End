   /**
    * DTO-TEST: Uso de PayLoad / Body mais Leve e especializado...
    */
export class UserEditFullNameOnlyDTO {
    /**
     * Reservado para o primeiro nome apenas.
     * @example Fulano
     */
    readonly firstName?: string;

    /**
     * Reservado para o sobre-nome completo.
     * @example Silva
     */
    readonly lastName?: string;

}
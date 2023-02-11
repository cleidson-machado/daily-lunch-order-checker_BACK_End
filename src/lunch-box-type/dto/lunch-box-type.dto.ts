    /**
     * DTO-FULL: Padrão que representa a Entidade / Model no Prisma para a Marmita...
     */
export class LunchBoxTypeDto {
    /**
     * Reservado para o primeiro nome apenas.
     * @example Marmita Normal Simples
     */
    name: string

    /**
     * Reservado para o primeiro nome apenas.
     * @example Descrições afins sobre o Produto...
     */
    description: string

    /**
     * Armazena automaticamente a data de criação do registro.
     * @example 2023-02-07T22:54:19.505Z
     */
    createdAt: Date | null

    /**
     * Armazena automaticamente a data de alteração do registro.
     * @example 2023-02-07T22:54:19.505Z
     */
    updatedAt: Date | null
}

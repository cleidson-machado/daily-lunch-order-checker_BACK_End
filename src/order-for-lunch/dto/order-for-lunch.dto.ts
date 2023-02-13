    /**
     * DTO-FULL: Padrão que representa a Entidade / Model no Prisma para o PEDIDO...
     */
import { Decimal } from "@prisma/client/runtime"

export class OrderForLunchDto {

    /**
     * Reservado para o VALOR / PREÇO do Pedido. Obtido pela multiplicação do Preço do Menu pela quantidade de Itens num pedido.
     * @example 123.23
     */
    orderValue: number

     /**
     * Reservado para a QUANTIDADE de Itens de um Pedido.
     * @example 1
     */
    amount: number

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

    /**
     * Armazena automaticamente a FK para relacionamento da LunchMealMenu... Gerada via UUID
     * @example a6584e78-508b-4b72-8f40-6e8b3efacbcd
     */
    lunchMealId: string

    /**
     * Armazena automaticamente a FK para relacionamento do Usuário solicitante... Gerada via UUID
     * @example a6584e78-508b-4b72-8f40-6e8b3efacbcd
     */
    userOderId: string

}

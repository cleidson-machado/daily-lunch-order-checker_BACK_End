    /**
     * DTO-FULL: Padrão que representa a Entidade / Model no Prisma para a Marmita...
     */
export class LunchBoxTypeDto {
    /**
     * Reservado para o Nome / Título da Marmita.
     * @example Marmita Normal Simples...
     */
    name: string

    /**
     * Reservado para o primeiro nome apenas.
     * @example Descrições afins sobre o Produto...
     */
    description: string

    /**
     * Reservado para a Armazenar a URL da Imagem ou Path de Hospedagem da IMG.
     * @example http://umdominio.com/app/img/menuprint.jpg
     */
        imageLinkPath: string

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

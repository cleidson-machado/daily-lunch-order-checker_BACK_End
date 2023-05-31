/**
 * DTO-FULL: Padrão que representa a Entidade / Model no Prisma para o Menu...
 */

export class LunchMealMenuDto {
  /**
   * Reservado para o Nome / Título do Menu.
   * @example Macarrão-a-Bolonhesa
   */
  name: string;

  /**
   * Reservado para o Tipo da Refeição a qual pertence o Menu.
   * @example FIT_ou_NORMAL
   */
  type: string;

  /**
   * Quantidade de Calorias do Menu.. Em Número Decimal.
   * @example 4150.55
   */
  averageCalories: number;

  /**
   * Peso da porção... Em Número Decimal.
   * @example 350.55
   */
  averageWeight: number;

  /**
   * Preço Médio do Menu... Em Número Decimal.
   * @example 4150.55
   */
  averagePrice: number;

  /**
   * Reservado para o Nome da Sobremesa Apenas.
   * @example GELATINA
   */
  dessertName: string;

  /**
   * Reservado para o Nome do Dia da Semana.
   * @example SEXTA-FEIRA
   */
  nameDayWeek: string;

  /**
   * Reservado para a Descrição do Menu.
   * @example Texto-descritivo-de-um-Menu-em-específico.
   */
  description: string;

  /**
   * Reservado para a Armazenar a Avaliação... Em número simples... de 1 a 10...
   * @example 1
   */
  rateQualityNumber: number;

  /**
   * Reservado para a Armazenar a URL da Imagem ou Path de Hospedagem da IMG.
   * @example http://umdominio.com/app/img/menuprint.jpg
   */
  imageLinkPath: string;

  /**
   * Armazena automaticamente a data de criação do registro.
   * @example 2023-02-07T22:54:19.505Z
   */
  createdAt: Date | null;

  /**
   * Armazena automaticamente a data de alteração do registro.
   * @example 2023-02-07T22:54:19.505Z
   */
  updatedAt: Date | null;

  /**
   * Armazena automaticamente a FK para relacionamento da LunchBox... Gerada via UUID
   * @example a6584e78-508b-4b72-8f40-6e8b3efacbcd
   */
  lunchBoxId: string;
}

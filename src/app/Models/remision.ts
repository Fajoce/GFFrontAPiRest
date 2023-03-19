export interface Remision {
    remissionId?: number,
    remissionDate: Date,
    technicalCode: string,
    technicalFullName?: string,
    itemCode: string,
    itemName?: string,
    remissionQuantity: number
}

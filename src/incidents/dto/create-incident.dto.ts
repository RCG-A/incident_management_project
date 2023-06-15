export class CreateIncidentDto {
    numTK: string
    requestingUserId: number
    affectedUserId: number
    company: string
    categoriesId: number
    subcategories1: number
    subcategories2: number
    assignmentGroupId: number
    assignedUserId: number
    briefDescription: string
    description: string
    historic: string
}

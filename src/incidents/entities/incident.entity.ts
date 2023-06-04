import { AssignmentGroup } from "src/assignment-group/entities/assignment-group.entity"
import { Category } from "src/categories/entities/category.entity"
import { User } from "src/users/entities/user.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity({name: 'incident'})
export class Incident {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    numTK: string

    @Column()
    requestingUserId: number

    @ManyToOne(() => User, requestingUser => requestingUser.incident)
    requestingUser: User

    @Column()
    affectedUserId: number

    @ManyToOne(() => User, affectedUser => affectedUser.incident)
    affectedUser: User

    @Column()
    company: string

    @Column()
    categoriesId: number

    // @ManyToOne(() => Category, categories => categories.incident)
    // categories: Category

    @Column()
    subcategories1: number

    @Column()
    subcategories2: number

    @Column()
    subcategories3: number

    @Column()
    subcategories4: number

    @Column()
    assignmentGroupId: number

    @ManyToOne(() => AssignmentGroup, assignmentGroup => assignmentGroup.incident)
    assignmentGroup: AssignmentGroup

    @Column()
    assignedUserId: number

    @ManyToOne(() => User, assignedUser => assignedUser.incident)
    assignedUser: User

    @Column()
    briefDescription: string

    @Column()
    description: string

    @Column()
    historic: string

}

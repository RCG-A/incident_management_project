import { User } from "src/users/entities/user.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'role'})
export class Role {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string
    
    @OneToMany(() => User, user => user.assignmentGroup)
    users: User[]

}

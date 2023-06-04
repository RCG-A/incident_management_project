import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "src/users/entities/user.entity"
import { Incident } from "src/incidents/entities/incident.entity"

@Entity({name: 'assignmentGroup'})
export class AssignmentGroup {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string
    
    @OneToMany(() => User, user => user.assignmentGroup)
    users: User[]

    @OneToMany(() => Incident, incident => incident.assignmentGroup)
    incident: Incident[]

}

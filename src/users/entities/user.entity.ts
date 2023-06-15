import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "src/roles/entities/role.entity";
import { AssignmentGroup } from "src/assignment-group/entities/assignment-group.entity";
import { Incident } from "src/incidents/entities/incident.entity";

@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    DNI: string;

    @Column()
    name: string

    @Column()
    lastname: string

    @Column()
    email: string

    @Column()
    password: string
    
    @Column()
    roleId: number

    @ManyToOne(() => Role, role => role.users)
    role: Role

    @Column()
    assignmentGroupId: number

    @ManyToOne(() => AssignmentGroup, assignmentGroup => assignmentGroup.users)
    assignmentGroup: AssignmentGroup

    @Column({default: false})
    status: boolean;

    @Column({ type: "datetime", default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

    @OneToMany(() => Incident, incident => incident.requestingUser)
    incident: Incident[]

    @OneToMany(() => Incident, incident => incident.affectedUser)
    affectedUser: Incident[]
    
    @OneToMany(() => Incident, incident => incident.assignedUser)
    assignedUser: Incident[]
    
}

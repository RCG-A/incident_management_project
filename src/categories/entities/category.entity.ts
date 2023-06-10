import { Incident } from "src/incidents/entities/incident.entity";
import { Subcategories1 } from "src/subcategories1/entities/subcategories1.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'category'})
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @OneToMany(() => Incident, incident => incident.categories)
    incident: Incident[]

    @OneToMany(() => Subcategories1, subcategories1 => subcategories1.categories)
    subcategories1: Subcategories1[]
    
}

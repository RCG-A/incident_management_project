import { Subcategories1 } from "src/subcategories1/entities/subcategories1.entity";
import { Subcategories3 } from "src/subcategories3/entities/subcategories3.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'subcategories2'})
export class Subcategories2 {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    subcategories1Id: number

    @ManyToOne(() => Subcategories1, subcategories1 => subcategories1.subcategories2)
    subcategories1: Subcategories1

    // @OneToMany(() => Subcategories3, subcategories3 => subcategories3.subcategories2)
    // subcategories3: Subcategories3[]

}

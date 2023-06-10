import { Subcategories2 } from "src/subcategories2/entities/subcategories2.entity"
import { Subcategories4 } from "src/subcategories4/entities/subcategories4.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity({name: 'subcategories3'})
export class Subcategories3 {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    subcategories2Id: number

    // @ManyToOne(() => Subcategories2, subcategories2 => subcategories2.subcategories3)
    // subcategories2: Subcategories2

    // @OneToMany(() => Subcategories4, subcategories4 => subcategories4.subcategories3)
    // subcategories4: Subcategories4[]

}

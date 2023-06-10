import { Subcategories3 } from "src/subcategories3/entities/subcategories3.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'subcategories4'})
export class Subcategories4 {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    subcategories3Id: number

    // @ManyToOne(() => Subcategories3, subcategories3 => subcategories3.subcategories4)
    // subcategories3: Subcategories3

}

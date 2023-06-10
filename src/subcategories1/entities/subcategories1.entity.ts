import { Category } from "src/categories/entities/category.entity";
import { Subcategories2 } from "src/subcategories2/entities/subcategories2.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'subcategories1'})
export class Subcategories1 {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    categoriesId: number

    @ManyToOne(() => Category, categories => categories.subcategories1)
    categories: Category

    @OneToMany(() => Subcategories2, subcategories2 => subcategories2.subcategories1)
    subcategories2: Subcategories2[]

}

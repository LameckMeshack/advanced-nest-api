import { Column, Entity, Index, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity";

@Entity()
export class Coffee {
    @Index(['name', 'brand'])
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column({ default: 0 })
    recommendations: number;


    @JoinTable()
    @ManyToMany(type => Flavor, (flavor) => flavor.coffees, {
        cascade: true, //[unsert]
    })
    flavors: Flavor[];
}

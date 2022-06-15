import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "posts" })
export class PostEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: false
    })
    name: string;

    @Column({
        nullable: true
    })
    description: string;

}
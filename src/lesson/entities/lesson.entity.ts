import {ObjectType, Field} from '@nestjs/graphql';
import {Column, Entity, ManyToMany, ObjectIdColumn} from "typeorm";
import {Student} from "../../students/entities/student.entity";

@ObjectType('Lesson')
@Entity()
export class Lesson {

    @ObjectIdColumn()
    _id: string

    @Field(() => String, {description: 'Example field (placeholder)'})
    @Column({
        unique: true
    })
    slug: string;

    @Field(() => String, {description: 'Example field (placeholder)'})
    @Column()
    name: string;

    @Field(() => Date, {description: 'Example field (placeholder)'})
    @Column()
    startDate: Date;

    @Field()
    @Column()
    endDate: Date;


    @Field(() => [Student])
    @ManyToMany(() => Student, student => student.lessons,
        {
            eager: true
        }
    )
    students: string[];


}

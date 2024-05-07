import {ObjectType, Field, Int} from '@nestjs/graphql';
import {Column, Entity, ManyToMany, ObjectIdColumn, PrimaryColumn} from "typeorm";
import {Lesson} from "../../lesson/entities/lesson.entity";

@ObjectType()
@Entity()
export class Student {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    @Field(() => String, {description: 'Example field (placeholder)'})
    id: string;

    @Field(() => String, {description: 'Example field (placeholder)'})
    @Column()
    firstName: string;

    @Field(() => String, {description: 'Example field (placeholder)'})
    @Column()
    lastName: string;


    @ManyToMany(() => Lesson, lesson => lesson.students,)
    lessons: string[];
}

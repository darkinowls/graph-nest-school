import {Field, InputType} from '@nestjs/graphql';
import {IsOptional, MinLength} from "class-validator";

@InputType()
export class CreateLessonInput {

    @MinLength(3)
    @Field()
    slug: string

    @MinLength(3)
    @Field()
    name: string;

    @Field()
    @IsOptional()
    startDate?: Date = new Date();

    @Field()
    @IsOptional()
    endDate?: Date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
}

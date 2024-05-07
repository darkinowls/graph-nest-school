import {InputType, Int, Field} from '@nestjs/graphql';
import {MinLength} from "class-validator";

@InputType()
export class CreateStudentInput {

    @Field(() => String)
    @MinLength(3)
    firstName: string;

    @Field(() => String)
    @MinLength(3)
    lastName: string;
}

import {Field, InputType} from "@nestjs/graphql";
import {IsString, IsUUID} from "class-validator";

@InputType()
export class AssignLessonInput {

    @Field(() => String)
    @IsString()
    lessonSlug: string;

    @Field(() => [String])
    @IsUUID("4", {each: true})
    studentIds: string[];
}
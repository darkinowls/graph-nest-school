import {Field, InputType} from "@nestjs/graphql";
import {IsUUID, MinLength} from "class-validator";

@InputType()
export class AssignLessonInput {

    @Field(() => String)
    @MinLength(3)
    lessonSlug: string;

    @Field(() => [String], {defaultValue: []})
    @IsUUID("4", {each: true})
    studentIds: string[];
}
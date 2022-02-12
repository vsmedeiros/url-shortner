import { prop, getModelForClass } from '@typegoose/typegoose';

class URL {
    @prop({ required: true })
    public hash?: string;

    @prop({ required: true })
    public originURL?: string;

    @prop({ required: true })
    shortURL?: string;

}
export const URLModel = getModelForClass(URL);
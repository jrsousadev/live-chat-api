import { ObjectId } from "mongodb"

export const validObjectId = (id: string) => {
    return ObjectId.isValid(id);
}
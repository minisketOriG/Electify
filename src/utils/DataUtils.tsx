
import { reqtype, vartype } from "@/interfaces/enums"

export const colors = [
    { color: "bg-[#0C35BC]" },
    { color: "bg-black" },
    { color: "bg-rose-500" },
    { color: "bg-green-500" },
    { color: "bg-amber-400" },
    { color: "bg-gray-500" },
    { color: "bg-teal-500" },
]

export const contenderVariables = [
    { name: "title", type: vartype.text, requirement: reqtype.default },
    { name: "email", type: vartype.email, requirement: reqtype.required },
    { name: "age", type: vartype.number, requirement: reqtype.required },
    { name: "bio", type: vartype.text, requirement: reqtype.required },
    { name: "phone number", type: vartype.number, requirement: reqtype.optional },
]
'use client'
import { SignUpData, signUpSystemAdmin } from "@/app/actions/account"
import { useMutation } from "@tanstack/react-query"

export const useCreateUserAccountMutation = ()=>{
    return useMutation({
        mutationFn:(user: SignUpData)=> signUpSystemAdmin(user)
    })
}
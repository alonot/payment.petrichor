import type { PageServerLoad } from "./$types"

export const load: PageServerLoad  = async ({url, cookies}) => {
    const id = url.searchParams.get("id")
    const user = url.searchParams.get("user")

    const accesstoken = cookies.get("session_id")
    return {
        "id" : id,
        "user" : user,
        "accessToken": (accesstoken == undefined) ? null : accesstoken
    }
}
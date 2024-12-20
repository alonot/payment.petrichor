import { API, POST } from "$lib"
import { fail } from "@sveltejs/kit"
import type { Actions, PageServerLoad } from "./$types"

export const load: PageServerLoad  = async ({url, cookies}) => {
    const id = url.searchParams.get("id")

    const accesstoken = cookies.get("session_id")
    return {
        "id" : id,
        "accessToken": (accesstoken == undefined) ? null : accesstoken
    }
}

export const actions = {
   "pay": async ( {request,cookies} ) => {
        // call apply event Paid here
        // check for transactionId. and CAcode is taken only if verified
        console.log("registering");
        const data = await request.formData();
        const participants:string[] = []
        const eventId = data.get("eventId")
        const accessToken = cookies.get('session_id') ?? "a"
        const response = await POST(
			API.events_apply_free,
			{
                participants: participants,
                eventId: eventId,
			},
			accessToken
		)
			.then((res) => res.json())
			.then((res) => {
				if (res.status == 200){
                    if (res.success){
                        // handle
                        return res
                    }else{
                        return fail(400,{...res,"err":res.message})
                    }
                }else{
                    return fail(400,{...res,"err":res.message})
                }
			})
			.catch((err) => {
				console.log(err.toString());
				return fail(400,{
                    "success":false,
                    "err":"Unable to resolve the response. Please re-try after sometime",
                })
			});
        return response
    }
} satisfies Actions;

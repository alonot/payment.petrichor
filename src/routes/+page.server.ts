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
        let CACode = data.get("CACode")
        if (CACode == ""){
            CACode = "null"
        }
        const transactionID = data.get("transactionID")
        const participants:string[] = [] // since only 1 member registers at a time
        const eventId = data.get("eventId")
        const accessToken = cookies.get('session_id') ?? "a"
        const response = await POST(
			API.events_apply_paid,
			{
				"transactionID": transactionID,
                "participants": participants,
                "eventId": eventId,
                CACode:CACode,
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
    },
    "verify": async ( {request,cookies} ) => {
        // call apply event Paid here
        // check for transactionId. and CAcode is taken only if verified
        console.log("verifying");
        const data = await request.formData();
        // console.log(data)
        const response = await POST(
			API.verifyCA,
			{
				"CACode": data.get("CACode")
			},
			undefined
		)
			.then((res) => res.json())
			.then((res) => {
				if (res.status == 200){
                    if (res.verified){
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

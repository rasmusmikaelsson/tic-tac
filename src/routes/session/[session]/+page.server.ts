import type { PageServerLoad } from './$types';
import { _sessions } from '../+page.server';
import { error, type Actions } from '@sveltejs/kit';

let currentSession : string
let messages : {text: string, user: string}[]

export const load = (async ({ request,params, cookies }) => {

    currentSession = params.session;

    let user = cookies.get("username")

    if(!_sessions.has(currentSession)){
        throw error(404, "Session not found")
    }
    messages = _sessions.has(currentSession) ? _sessions.get(currentSession)! : [];
    if(messages == undefined) {
        messages = [];
    }

    return {session: currentSession, messages, user};
}) satisfies PageServerLoad;

export const actions: Actions = {
    message: async ({ request, cookies }) => {
        let user = ""
        let data = await request.formData();
        let msg = data.get("message")?.toString();
        if(!msg) {
            msg = "I agree."
        }
        if(cookies.get("username") != undefined) {
            user = cookies.get("username")!
        }
        else {
            user = "unknown";
        }
        _sessions.get(currentSession)?.push({text: msg, user: user});
        
    }
};
import type { PageServerLoad } from './$types';
import { _sessions } from '../+page.server';
import { error, type Actions } from '@sveltejs/kit';

let currentSession : string
let messages : string[]

export const load = (async ({ request,params }) => {

    currentSession = params.session;

    if(!_sessions.has(currentSession)){
        throw error(404, "Session not found")
    }
    messages = _sessions.has(currentSession) ? _sessions.get(currentSession)! : [];
    if(messages == undefined) {
        messages = [];
    }

    return {session: currentSession, messages};
}) satisfies PageServerLoad;

export const actions: Actions = {
    message: async ({ request, cookies }) => {

        let data = await request.formData();
        let msg = data.get("message")?.toString();
        if(!msg) {
            msg = "I agree."
        }
        if(cookies.get("username") != undefined) {
            msg = cookies.get("username") + ": " + msg
        }
        else {
            msg = "unknown: " + msg;
        }
        _sessions.get(currentSession)?.push(msg);
        
    }
};
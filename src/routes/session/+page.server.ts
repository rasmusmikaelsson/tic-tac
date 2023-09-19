import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export let _sessions:Map<string,string[]> = new Map();

export const load = (async ({ request,params }) => {

    return { sessions: _sessions};
}) satisfies PageServerLoad;

export const actions: Actions = {
    create: async({request}) => {
        let data = await request.formData();
        let sessionName = data.get("sessionName")?.toString();
        if(!sessionName){
            return fail(400, {sessionName: "no name?"})
        }
        else if(_sessions.has(sessionName)){
            return fail(400, {sessionName: "Session already exists."})
        }
        
        _sessions.set(sessionName, []);
    }
};
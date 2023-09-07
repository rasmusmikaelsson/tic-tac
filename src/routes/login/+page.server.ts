import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

let users: string[] = [];

// körs varje gång sidan hämtas
export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

// motsvarar de forms som finns på sidan
export const actions: Actions = {
    login: async ({request, cookies}) => {
        let data = await request.formData();
        let username = data.get('username')?.toString();

        if (username) {
            if (users.includes(username)) {
                return fail(400, {username: "User already logged in.. "});
            } else {
                users.push(username)
                cookies.set("username", username);
                throw redirect(307, '/')
            }
        }

        console.log(username);
    },

    logout: async ({ request, cookies }) => {
        let username = cookies.get("username");
        if (!username) {
            return fail(400, {username: "No username detected "});
        }
        cookies.delete("username");
        users = users.filter((e) => e != username);
    }
};
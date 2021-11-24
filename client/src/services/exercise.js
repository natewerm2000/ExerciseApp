/* B"H
*/

import { api } from "./myFetch";



export function GetAll() {
    return api('exercise');
}

export function GetWall(handle) {
    return api('exercise/wall/' + handle);
}

export function GetFeed(handle) { 
    return api('exercise/feed/' + handle);   
}


export function Get(post_id) { return api('exercise/' + post_id); }

export function Add(post) {
     return api('exercise', post);
}
export function Update(post_id, post) {
    return { post_id, post};
}
export function Delete(post_id) {
    return api('exercise/' + post_id, {}, 'DELETE');
} 
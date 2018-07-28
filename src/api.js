import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:8081/',
    json: true
});

export default {
    async execute(method, resource, data) {
        return client({
            method,
            url: resource,
            data,
            headers: {}
        }).then((req) => {
            return req.data;
        }).catch((err) => {
            console.log(`Caught error invoking API using method of ${method} on resource of ${resource}.`, err);
        });
    },
    createPost(data) {
        return this.execute('post', '/posts', data);
    },
    deletePost(id) {
        return this.execute('delete', `/posts/${id}`);
    },
    getPost(id) {
        return this.execute('get', `/posts/${id}`);
    },
    getPosts() {
        return this.execute('get', '/posts');
    },
    updatePost(id, data) {
        return this.execute('put', `/posts/${id}`, data);
    }
};

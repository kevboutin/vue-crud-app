<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Posts Manager</h1>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
          <tr>
            <th>Id</th>
            <th>Subject</th>
            <th>Updated At</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.subject }}</td>
            <td>{{ post.updatedAt }}</td>
            <td class="text-right">
              <a href="#" @click.prevent="populatePostToEdit(post)">Edit</a> -
              <a href="#" @click.prevent="deletePost(post.id)">Delete</a>
            </td>
          </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card :title="(model.id ? 'Edit Post ID#' + model.id : 'New Post')">
          <form @submit.prevent="savePost">
            <b-form-group label="Subject">
              <b-form-input type="text" v-model="model.subject"></b-form-input>
            </b-form-group>
            <b-form-group label="Body">
              <b-form-textarea rows="4" v-model="model.body"></b-form-textarea>
            </b-form-group>
            <div>
              <b-button type="submit" variant="primary">Save Post</b-button>
              <b-button v-if="model.id" type="button" variant="secondary" @click.prevent="onCancel">Cancel Edit</b-button>
            </div>
            <div>
              <b-modal id="modal-center" ref="confirmModal" centered title="Delete Confirmation" @ok="handleOk">
                <p class="modal-text">Are you sure you want to delete this post?</p>
              </b-modal>
            </div>
          </form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import api from '@/api';

  export default {
    data() {
      return {
        loading: false,
        deleteId: null,
        posts: [],
        model: {}
      };
    },
    async created() {
      this.refreshPosts();
    },
    methods: {
      async refreshPosts() {
        this.$refs.confirmModal.hide();
        this.loading = true;
        this.posts = await api.getPosts();
        this.loading = false;
      },
      async populatePostToEdit(post) {
        // The Object.assign() call copies the value of the post argument rather than the reference. When dealing with
        // mutation of objects in Vue, you should always set to the value, not reference.
        this.model = Object.assign({}, post);
      },
      async savePost() {
        if (this.model.id) {
          await api.updatePost(this.model.id, this.model);
        } else {
          await api.createPost(this.model);
        }
        this.model = {}; // reset form
        await this.refreshPosts();
      },
      async onCancel() {
        this.model = {};
      },
      async deletePost(id) {
        this.deleteId = id;
        this.$refs.confirmModal.show();
      },
      async handleOk() {
        if (this.deleteId) {
          await api.deletePost(this.deleteId);
          await this.refreshPosts();
          this.$refs.confirmModal.hide();
        }
      }
    }
  };
</script>

<style>
  h1, .h1 {
    font-size: 1.6rem;
  }
</style>

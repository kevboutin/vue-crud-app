<template>
  <div class="container-fluid mt-4 app-container">
    <div class="search-panel col-sm-3 form-group">
      <label for="search-element">Subject Search</label>
      <input v-model="searchKey" class="form-control" id="search-element"/>
    </div>
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
          <tr v-for="post in filteredPosts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.subject }}</td>
            <td>{{ post.updatedAt }}</td>
            <td class="text-right">
              <a href="#" @click.prevent="populatePostToEdit(post)"><b-button size="sm" variant="warning">Edit</b-button></a>
              <span>&nbsp;</span>
              <a href="#" @click.prevent="deletePost(post.id)"><b-button size="sm" variant="danger">Delete</b-button></a>
            </td>
          </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card :title="(model.id ? 'Edit Post Id: ' + model.id : 'New Post')">
          <form @submit.prevent="savePost">
            <b-form-group label="Subject">
              <b-form-input type="text" v-model="model.subject"></b-form-input>
            </b-form-group>
            <b-form-group label="Body">
              <b-form-textarea rows="4" v-model="model.body"></b-form-textarea>
            </b-form-group>
            <div>
              <b-button v-if="model.id" type="button" variant="secondary" @click.prevent="onCancel">Cancel Edit</b-button>
              <b-button v-if="model.id" type="submit" variant="primary">Save Edit</b-button>
              <b-button v-else type="submit" variant="primary">Save Post</b-button>
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
        searchKey: null,
        posts: [],
        model: {}
      };
    },
    async created() {
      this.refreshPosts();
    },
    computed: {
      filteredPosts: function () {
        const self = this;
        if (!self.searchKey) {
          return self.posts;
        }
        return self.posts.filter(function (post) {
          return post.subject.toLowerCase().indexOf(self.searchKey.toLowerCase()) !== -1;
        });
      }
    },
    methods: {
      async refreshPosts() {
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
  thead {
    background-color: rgba(0, 0, 0, 0.09);
  }
  td {
    white-space: nowrap;
  }
  .table {
    outline-style: solid;
    outline-color: #ddd;
    outline-width: thin;
  }
  .app-container {
    margin-bottom: 1rem;
  }
</style>
